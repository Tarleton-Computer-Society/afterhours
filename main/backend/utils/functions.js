function createSlug(str) {
    // Convert the string to lowercase
    str = str.toLowerCase();
  
    // Replace any non-alphanumeric characters with a hyphen
    str = str.replace(/[^a-z0-9]+/g, '-');
  
    // Remove any leading or trailing hyphens
    str = str.trim('-');
  
    return str;
  }

  
module.exports={ createSlug}