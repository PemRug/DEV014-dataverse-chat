//import { getApiKey } from "./apiKey";
//podemos importar el nombre del usuario
const key = "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";
export const communicateWithOpenAI = (messages, tour) => {
  const configOpenAI = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: "system", content: `You are: an expert touristic guide from ${tour.name} de Costa Rica, you are living near to the touristic place, you love to be a touristic guide and you define yourself as kind and relax`,
        },
        {
          role: "user",
          content: messages,
        },
      ],
    }),
  };
  return new Promise((resolve, reject) => {
      fetch('https://api.openai.com/v1/chat/completions', configOpenAI)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(data => {
        resolve(data.choices[0].messages.content);
      }).catch(error => {
        reject('It is not communication with OpenAI' + error);
      });
    });
    console.log(Promise);
  }


// export const communicateWithOpenAI = async (messages, tour) => {
//   const response = await fetch('https://api.openai.com/v1/chat/completions', {//peticion fetch a esa url
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer' + key,
//     },
//     body: JSON.stringify({
//       model: 'gpt-3.5-turbo',// modelo de OpenAI
//       messages: [
//         {
//           role: "system", content: `You are: an expert touristic guide from ${tour.name} de Costa Rica, you are living near to the touristic place, you love to be a touristic guide and you define yourself as kind and relax`,
//         },
//         {
//           role: "user",
//           content: messages,
//         },
//       ],
//       max_tokens: 60,
//       temperature: 0.9,
//     }),
//   });
//   const messageReturn = await response.json();
//   return messageReturn.choices[0].messages.content;

// catch(error){
//   console.log(error);
//   throw error("Error al comunicarse con OpenAI:", error);
// }


// let procesoLento = new Promise((resolve, reject) => {
//     let datos = {};
//     //...
//     //muchas lineas de código
//     //...
//     if (error) {
//       //uh oh, las cosas no salieron tan bien
//       reject(new Error('Fallamos, lo siento'));
//     }
//     //...
//     resolve(datos);
//   });