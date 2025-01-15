//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince/Yaoundé";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://pin.it/6IUVw3CJR,https://pin.it/BcCsGHBfE,https://pin.it/6vWX7PYdD";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "237697262077,237691958259,237695462359";
global.owner = process.env.OWNER_NUMBER || "237697262077";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USERiMAGES || "https://pin.it/66K1hzmH9,https://pin.it/2OHIY0Ulu,https://pin.it/BcCsGHBfE,https://pin.it/1aNns8N2N,https://pin.it/55ZdsXQKi,https://pin.it/7rX0eqFSu,https://pin.it/74VSH5qHV,https://pin.it/2HG40ANQf,https://pin.it/5M3aa4iC5,https://pin.it/4wlDXO4kc"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtCYStCZGRRWWVYM3dXUHRyaDlOMjM5Znc5MXpMT0JPZ1dvVnlpYzBsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWZLdnl3c05mUFhvZDAvaGZHSE1YYmxLNUxsTm1mdnFWVjhWU2dMMGFGMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TUI4T3JxL1JpdjM3dGMzcUxhMGVDandsUnYzT0FBNkV4M2ZndUZidmxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqNUltVHZLUWtGWnJHRnRzRHRYaDBYNGxrTUZWN3paZmhPTXdTVXcrRndrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1MeDc3Mm90UjNPanV1aXlreDlWZEdYN2hEWEM3MXdibkhNMEF5V2NVMUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhIYWJscmZuaXNJMGhZVTlyWDc3RlZybkh6WDByMWRLR0tqaEFLelFtd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BCeTAxcHU3MDk1OXBadTQ2YWNDWHpCN05oRjBZMzBoUGg1TDd5RzNHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUld5RStkOEdreEhBTmJHZjZxcmYwRDRxdXE2dUttQUJPSEtYdzN5ak1Ycz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt4T2UrVlZ5am11dmNYUW1FdUVlZDNpM2g2eW1sUS9MNUpFZWVHb0VZcnNUazkxczFBa3U1L2x3Y0RxUzhuTTlwQ0xtbG5reXFYdEdXRi9mK3JzMGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJMdCtLbWU2UGZ6RnR0Z0Fmb0ZHM1FDKzdNb09CTGIvS3l1K3gzL1hLblFVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5el9VZzZSZFFrV3VEdGhrenY2cjJRIiwicGhvbmVJZCI6IjhkNWViNGMwLTkxMWUtNDgxYy04ZDViLWQ3NWMwNTcwODNhNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSZjZSbnVlU2hnZCszTzYzc2VhbktIcmZSdWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3p2cjRZQW5ITEhoMHc2cFJxanpaTHFpRDZJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNOVktXRDNQIiwibWUiOnsiaWQiOiIyMzc2OTcyNjIwNzc6MjlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pEcHBZb0JFSm12bjd3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImR2V2xGeXJYdXduTVZXTDk0UEp0TGExUDBPbmNKbVJvUHNDVzBwMDU2RlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjF3bnQ4czN0Rm13aFNtbGxGNUV4OCszdXNmejBRRUpVQzRIU3RrSDdLU0gvUEJiRDNlOHpkcFhnbmlQYjR5MTVqcTFPeG91OUFNdk1XKzYvUGxEZ0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiL3NDa2NITHd0cm94K3ZuRVR4SmtvQ25oSWx0Tzdnb09lSHNFUFJDaVNRZTBHVWpkNWsxLzkzVGszdXordzVqQlRONGgzMWlIRmE5Znk1ZDVUTmJpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5NzI2MjA3NzoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYYjFwUmNxMTdzSnpGVmkvZUR5YlMydFQ5RHAzQ1prYUQ3QWx0S2RPZWhVIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2OTU1ODE1fQ=="
  module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "D.U.C🖤👑",
  botname: process.env.BOT_NAME || "ST┘♤DOVE♤",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
