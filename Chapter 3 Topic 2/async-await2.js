// fungsi yang mereturn promise
function isPasswordCorrect(password) {
    return new Promise((resolve, reject) => {
      if (password !== '123456') {
       return reject("Wrong password!") 
      }
     
      return resolve("Password is correct!")
    });
   }
   
   // cara panggil dengan .then & .catch
   isPasswordCorrect('123456').then((result) => {
     console.log(result)
   }).catch((err) => {
     console.log(err);
   });
   
   // cara panggil dengan async-await & catch
   async function checkPassword() {
     try {
       let result = await isPasswordCorrect('123456');
       console.log(result);
     } catch (err) {
      console.log(err); 
     }
   }
   
   checkPassword();
   
   // cara panggil dengan async-await & catch (versi arrow)
   const checkPassword = async () => {
     try {
       let result = await isPasswordCorrect('123456');
       console.log(result);
     } catch (err) {
      console.log(err); 
     }
   }
   
   checkPassword();
   
   
   