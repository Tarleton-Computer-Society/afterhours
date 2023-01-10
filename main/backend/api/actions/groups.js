const fs = require('fs');
const Groups = require('../models/groups');
const {createSlug} = require('../../utils/functions'); 
function makeGroups(){
    fs.readFile('data/majors.json', (err, data) => {
        if (err) throw err;
      
       
        const groupData = JSON.parse(data);

        groupData.forEach(group => {
            Groups.findOne({ name: group.major, slug:createSlug(group.major) }, (err, groupe) => {
                if (err) throw err;
              
                if (groupe) {
                  // The group data exists in the database
              
                } else {
                    const newGroup = new Groups({
                        index: group.index,
                        name: group.major,
                        slug: createSlug(group.major),
                        
                        members: [],
                        date: group.date
                    });
                    newGroup.save();
                
                }
              });
         

     
        }
        );
    });
}
module.exports ={ makeGroups}