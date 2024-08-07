const imageUrls = [
    "",
    
    
  ];
  
  const NameNotify = 'X sea Offical';
  const DiscordLink = 'https://discord.com/invite/9QdEDXm6vs';
  const NameDiscord = 'X sea Offical';
  const NameUser = 'By Béo Biên Hoà';
  
  const themefullmoon = {
      use: true,
      name:"Full Moon",
      "color": 0x03fc20,
      url:'https://discord.com/api/webhooks/1270535061921599591/gjXS7R_mdafvegO7lpaAYctGW9DpPiSPojOIXTIm2wUtjLQsfjlzqYwxbLelWVZLQrjg'  
    }
  const thememirage = {
      use: true,
      name:"Mirage Islands",
      "color": 0x03fc20,
      url:'https://discord.com/api/webhooks/1270532779410456607/F08IMkQtA9prbQDbKxe2g_MUpMfIvC8lASKmRHVzHa1kUuzenUp9DCkrzvn4nZeRznjr'  
    }
  const themekitsune = {
      use: true,
      name:"Kitsune Islands",
       "color": 0x03fc20,
      url:'https://discord.com/api/webhooks/1270535553917521941/8ionWIkzEQ6eHPi7GJ-XDvW_w4ycuwp-lU3ijVDQU8NGy_sULhBwR160gP0v2zlPHy9y'    
    }
  const themesword = {
      use: true,
      name:"Sword Legendary",
       "color": 0x03fc20,
      url:'https://discord.com/api/webhooks/1270540496271577209/bd73AyoiNWxpcyeL153Wgeih1Nb8gwsLo786dU0A2VkPoeNh3RbWJN148gL4VBfkQrV8'    
    }
  const themehakilegen = {
      use: true,
      name:"Haki Legendary",
       "color": 0x03fc20,
      url:'https://discord.com/api/webhooks/1270535553917521941/8ionWIkzEQ6eHPi7GJ-XDvW_w4ycuwp-lU3ijVDQU8NGy_sULhBwR160gP0v2zlPHy9y'    
    }
  const themefruitdrop = {
      use: true,
      name:"Fruit Drop Spawn",
       "color": 0x03fc20,
      url:'https://discord.com/api/webhooks/1270536171717525679/s5PWB45v3OtXYCwM3Y8UhqjVbsT7O2CIDCmRxpOaHsJcovVQBsOqmQo1u2K_F2Ythar8'    
    }
  const themebosssumon = {
      use: true,
      name:"Boss Spawn",
      "color": 0x03fc20,
      url:'https://discord.com/api/webhooks/1270539261116026881/JBQUlELUwgTiTKlM0nOlWn3d6hAb5D0M7bY4qJvBkDHlVz4Uzo37LKw15WM9X8m7ZPe9'  
    }
  const themerip = {
      use: true,
      name:"Rip Indra",
      "color": 0x03fc20,
      url:'https://discord.com/api/webhooks/1270536393709457532/rfzua-d62LHRlJZVZc-ewTDfpuV8dKcMm0HqTFJ8bRCUG3szjV3Rz6f-tFcLnzJOyNes'  
    }
  const themeghoul = {
      use: true,
      name:"Ghoul Boss",
      "color": 0x03fc20,
      url:'https://discord.com/api/webhooks/1270536538924515449/vCF4MxgP5IO3VFVQsWsAB0UoXvf7mIPyBijOqLUKWvi_LatGrFQqG0uCd2dnbEoOWyje'  
    }
  const themeking = {
      use: true,
      name:"King Legacy",
      "color": 0x03fc20,
      url:'https://discord.com/api/webhooks/1270537064953151488/RwWzk1ZSujuSk7_xn8KcTjpIHNHDLVUMEaO6VOzyEqYzQRa52CEwA5r73n-W3Q5SzjvH'  
    }
  const axios = require('axios');
  
  async function _S(theme, fieldsss) {
    if (!theme.use) {
      return '';
    }
  
    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  
    const data = {
      content: null,
      embeds: [
        {
          title: theme.name,
          description: `[Click To Join Discord](${DiscordLink})`,
          color: theme.color,
          fields: fieldsss,
          author: { name: `${NameNotify}` },
          image: { url: randomImageUrl },
          footer: { text: `${NameUser} |  ${NameDiscord} ${new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false })}`, }
          
        }
      ],
      attachments: []
    };
  
    try {
      const response = await axios.post(theme.url, data);
      if (response.status === 204) {
        console.log('[SYSTEM] Check Speed : ', theme.name);
      } else {
        console.log('Http OutPut : ' + response.status);
      }
    } catch (error) {
      console.log('[SYSTEM] Error OutPut : ' + error.message);
    }
  }
  
  const { Client } = require('discord.js-selfbot-v13');
  const DiscordBot = new Client();
  
  DiscordBot.on('ready', async () => {
    console.log(`Console - Start Webhook`);
  });
  
  DiscordBot.on('messageCreate',async (message) => {
  if (message.channelId == 1233256365548503110) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themefullmoon,data)
   }
 } else if (message.channelId == 1224372507705082020) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(thememirage,data)    
   }
  } else if (message.channelId == 1251901107874173079) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themekitsune,data)    
   }
  } else if (message.channelId == 1251902007560638514) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themesword,data)    
   }
  } else if (message.channelId == 1251900039417040926) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themehakilegen,data)    
   } 
  } else if (message.channelId == 1251901786563018852) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themefruitdrop,data)    
   } 
  } else if (message.channelId == 1251902137034870896) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themebosssumon,data)    
   } 
  } else if (message.channelId == 1245919854905528402) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themerip,data)    
   } 
  } else if (message.channelId == 1245923859300089936) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeghoul,data)    
   } 
  } else if (message.channelId == 1230049569262534766) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeking,data)    
      }
    } 
  });
  
  const token = '"MTIxMzcyNDI1MTQ5Mjk4MjgzNQ.G0aFi4.dinInQhFzp0qBfrSQ7YaxClnqCRviMnI2V19IA"';
  
  DiscordBot.login(token);