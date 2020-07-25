const generateMessage = (message,name)=>{
   return { 
       text:message,
       name,
        createdAt:new Date().getTime()
    }
}

const generateLocationMessage = (url,name)=>{
    return { 
        url,
        name,
        createdAt:new Date().getTime()
     }
 }
 

module.exports = {generateMessage,generateLocationMessage}