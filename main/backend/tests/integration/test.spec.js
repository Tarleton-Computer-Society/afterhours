/**
 * Created by Vadym Yatsyuk on 11.08.18
 */
const app = require("../../index");
const request = require("supertest");

describe("sample integration tests", () => {
  it("should pass", () => {
    return request(app)
      .get("/api/v1/health")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({
          status: "ok",
        });
      });
  });

  
  describe("Validation", () => {
    it("should return validation error", (done) => {
      request(app)
        .post("/api/v1/objects")
        .expect(400)
        .then(() => {
          done();
        });
    });

    it("should return succes on passing all required body params", (done) => {
      request(app)
        .post("/api/v1/objects")
        .send({
          name: "Obj name",
        })
        .expect(201)
        .then((response) => {
          expect(response.body).toEqual({
            status: "ok",
          });
          done();
        });
    });
  });
});
