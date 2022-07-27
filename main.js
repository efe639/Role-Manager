const { Client, MessageEmbed } = require('discord.js');
const client = global.client = new Client({fetchAllMembers: true});
const button = require('discord-buttons');
const moment = require("moment")
require("moment-duration-format");
require("moment-timezone");
moment.locale("tr");
button(client);

client.SERVERSET = {
    TOKEN: "",
    BOTVOİCE: "",
    ETKİNLİK: "",
    CEKİLİS: "",
    STATUS: "",
    EMOJİ:"",
    UNREGİSTER:"",
    ERKEK:[""],
    KADIN:[""],
    VİP:"",
    botrolu:"",
    welcomekanal:"",
    messagelog:""
}

client.BURC = {
    koc: "",
    boga: "",
    ikizler: "",
    yengec: "",
    aslan: "",
    basak: "",
    terazi: "",
    akrep: "",
    yay: "",
    oglak: "",
    kova: "",
    balık: ""
}

client.GAME = {
    gta: "",
    cs: "",
    valorant: "",
    lol: "",
    minecraft: "",
    ets2: ""
}

client.on('ready', () => {
    client.channels.cache.get(client.SERVERSET.BOTVOİCE).join();
    console.log("Bot başarıyla ses kanalına giriş yaptı!");
    client.user.setActivity(client.SERVERSET.STATUS);
})

client.on('guildMemberAdd', (member) => {
    let channel = member.guild.channels.cache.get(client.SERVERSET.welcomekanal);
    channel.send(`Sunucumuza hoş geldin ${member} hesabın <t:${Math.round(member.user.createdTimestamp / 1000)}:R> zaman önce oluşturulmuş seninle beraber sunucumuz **${member.guild.memberCount}** üyeye ulaştı.`)});

client.on("guildMemberAdd", member => {
    let botrol = client.SERVERSET.botrolu 
    let üyerol = client.SERVERSET.unregister
    if (member.user.bot) {
        member.roles.add(botrol)
    } else {
        member.roles.add(üyerol)
    };
  });

  client.on("messageUpdate", async (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    let embed = new Discord.MessageEmbed()
    .setAuthor(newMessage.author.tag, newMessage.author.avatarURL({
        dynamic: true
      }))
      .setColor("2f3136")
      .setTimestamp()
      .addField(`Mesaj Bilgisi`,`• **${oldMessage.content}** --> **${newMessage.content}**`)
      .addField(`Kanal`,`• ${newMessage.channel}`)
      .addField(`Tarih`,`• ${moment(newMessage.createdTimestamp).locale("tr").format("LLL")}`)
      .setDescription(`• ${newMessage.author} kullanıcısının düzenlenen mesaj bilgisi aşağıda belirtilmiştir;`)
    client.channels.cache.get(client.SERVERSET.messagelog).send(embed)
  });

  client.on("messageDelete", async (message) => {
    if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({
        dynamic: true
      }))
      .setColor("2f3136")
      .setTimestamp()
      .setAuthor(message.author.tag, message.author.avatarURL({
        dynamic: true
      }))
      .addField(`Mesaj Bilgisi`,`• **${message.content.length > 0 ? message.content : "VERİ YOK"}** ${ message.attachments.size > 0 ? message.attachments.filter(({ proxyURL }) => /\.(gif|jpe?g|png|webp)$/i.test(proxyURL)).map(({ proxyURL }) => proxyURL) : ""}`)
      .addField(`Kanal`,`• ${message.channel}`)
      .addField(`Tarih`,`• ${moment(message.createdTimestamp).locale("tr").format("LLL")}`)
      .setDescription(`• ${message.author} kullanıcısının silinen mesaj bilgisi aşağıda belirtilmiştir;`)
    client.channels.cache.get(client.SERVERSET.messagelog).send(embed)
});

client.on("message", async message => {
let args = message.content.split("BUTONSİSTEM");
if(args[0] !== "!panel") return;
else {
    let button_1 = new button.MessageButton()
    .setStyle('1')
    .setLabel('I')
    .setID('b1')

    let button_2 = new button.MessageButton()
    .setStyle('1')
    .setLabel('II')
    .setID('b2')

    let button_3 = new button.MessageButton()
    .setStyle('1')
    .setLabel('III')
    .setID('b3')

    await message.channel.send(`
\`I:\` Sunucuya giriş tarihinizi öğrenin.
\`II:\` Hesabınızın açılış tarihini öğrenin.
\`III:\` Üzerinizdeki rolleri görüntüleyin.
`, {buttons: [button_1, button_2, button_3]})
    client.on("clickButton", async (button) => {
        if(button.id === "b1") {
            if(button.clicker.member.roles.cache.get()) {
               
                await button.think(true)
                await button.reply.edit(`\`${moment(button.clicker.member.joinedAt).locale("tr").format("LLL")}\` **Tarihinde sunucumuza giriş yapmışsınız!**`)   
            } else { 
         
                await button.think(true)
                await button.reply.edit(`\`${moment(button.clicker.member.joinedAt).locale("tr").format("LLL")}\` **Tarihinde sunucumuza giriş yapmışsınız!**`)  
            }
        }

        if(button.id === "b2") {
            if(button.clicker.member.roles.cache.get()) {
               
                await button.think(true)
                await button.reply.edit(`\`${moment(button.clicker.member.user.createdTimestamp).format("LLL")}\` **Tarihinde hesabınız oluşturulmuş!**`)
            } else {
               
                await button.think(true)
                await button.reply.edit(`\`${moment(button.clicker.member.user.createdTimestamp).format("LLL")}\` **Tarihinde hesabınız oluşturulmuş!**`)
            }
        }
        if(button.id === "b3") {
            if(button.clicker.member.roles.cache.get()) {
         
                await button.think(true)
                await button.reply.edit(`${button.clicker.member.roles.cache.size > 5 ? "hata" : `${button.clicker.member.roles.cache.filter(s => s.name != "@everyone").map(s => `${s}`).join(',')} (${button.clicker.member.roles.cache.size - 1})`}`)
            } else {
         
                await button.think(true)
                await button.reply.edit(`${button.clicker.member.roles.cache.size > 5 ? "hata" : `${button.clicker.member.roles.cache.filter(s => s.name != "@everyone").map(s => `${s}`).join(',')} (${button.clicker.member.roles.cache.size - 1})`}`)
            }
        }

    });};});

    client.on("message", async message => {
        let args = message.content.split("BUTONSİSTEM");
        if(args[0] !== "!buton") return;
        else {
            let button_1 = new button.MessageButton()
            .setStyle('1')
            .setLabel('Çekiliş Katılımcısı 🎁')
            .setID('1')
        
            let button_2 = new button.MessageButton()
            .setStyle('3')
            .setLabel('Etkinlik Katılımcısı ⭐')
            .setID('2')
        
            await message.channel.send(`
${client.SERVERSET.EMOJİ} Sunucuda sizleri rahatsız etmemek için \`@everyone\` veya \`@here\` atmayacağız. Sadece isteğiniz doğrultusunda aşağıda bulunan butonlara tıklarsanız çekiliş ve etkinlik duyurularından haberdar olacaksınız.
        
${client.SERVERSET.EMOJİ} • \`<@&${client.SERVERSET.ETKİNLİK}>\` rolünü alırsanız sunucumuzda düzenlenecek olan etkinlikler, konserler ve oyun etkinlikleri gibi etkinliklerden haberdar olabilirsiniz.
        
${client.SERVERSET.EMOJİ} • \`<@&${client.SERVERSET.CEKİLİS}>\` rolünü alırsanız sunucumuzda sürekli gerçekleşecek olan çekilişlerden haberdar olabilirsiniz.
        
        
${client.SERVERSET.EMOJİ} **NOT:** Kayıtlı ve kayıtsız user olarak hepiniz bu kanalı görebilmektesiniz. Sunucuda da everyone veya here atılmayacak olmasından dolayı rollerinizi almayı ihmal etmeyin.`, {buttons: [button_1, button_2]})
            client.on("clickButton", async (button) => {
                if(button.id === "1") {
                    if(button.clicker.member.roles.cache.get(client.SERVERSET.CEKİLİS)) {
                        await button.clicker.member.roles.remove(client.SERVERSET.CEKİLİS)
                        await button.think(true)
                        await button.reply.edit(`Çekiliş katılımcısı rolü hesabınızdan başarıyla kaldırıdı!`)   
                    } else { 
                        await button.clicker.member.roles.add(client.SERVERSET.CEKİLİS)
                        await button.think(true)
                        await button.reply.edit(`Çekiliş katılımcısı rolü hesabınıza başarıyla verildi!`)
                    }
                }
        
                if(button.id === "2") {
                    if(button.clicker.member.roles.cache.get(client.SERVERSET.ETKİNLİK)) {
                        await button.clicker.member.roles.remove(client.SERVERSET.ETKİNLİK)
                        await button.think(true)
                        await button.reply.edit(`Etkinlik duyuru rolü hesabınızdan başarıyla kaldırıldı!`)
                    } else {
                        await button.clicker.member.roles.add(client.SERVERSET.ETKİNLİK)
                        await button.think(true)
                        await button.reply.edit(`Etkinlik duyuru rolü hesabınıza başarıyla verildi!`)
                    }
                }
            });};});

//Burç
client.on("message", async message => {
    let args = message.content.split("BUTONSİSTEM");
    if(args[0] !== "!buton2") return;
    else {
        let button_1 = new button.MessageButton()
        .setStyle('1')
        .setLabel('Koç')
        .setID('1')

        let button_2 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Boğa')
        .setID('2')

        let button_3 = new button.MessageButton()
        .setStyle('3')
        .setLabel('İkizler')
        .setID('3')
 
        let button_4 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Yengeç')
        .setID('4')

        let button_5 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Aslan')
        .setID('5')

        let button_6 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Başak')
        .setID('6')

        let button_7 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Terazi')
        .setID('7')
        
        let button_8 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Akrep')
        .setID('8')

        let button_9 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Yay')
        .setID('9')
        
        let button_10 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Oğlak')
        .setID('10')

        let button_11 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Kova')
        .setID('11')

        let button_12 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Balık')
        .setID('12')
        await message.channel.send(``, {buttons: [button_1, button_2, button_3, button_4, button_5, button_6, button_7, button_8, button_9, button_10, button_11, button_12]})
        client.on("clickButton", async (button) => {
            if(button.id === "1") {
                if(button.clicker.member.roles.cache.get(client.BURC.koc)) {
                    await button.clicker.member.roles.remove(client.BURC.koc)
                    await button.think(true)
                    await button.reply.edit(`Burç rolü hesabınızdan başarıyla kaldırıdı!`)   
                } else { 
                    await button.clicker.member.roles.add(client.BURC.koc)
                    await button.think(true)
                    await button.reply.edit(`Burç rolü hesabınıza başarıyla verildi!`)
                }
            }
            if(button.id === "2") {
                if(button.clicker.member.roles.cache.get(client.BURC.boga)) {
                    await button.clicker.member.roles.remove(client.BURC.boga)
                    await button.think(true)
                    await button.reply.edit(`Boğa rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.BURC.boga)
                    await button.think(true)
                    await button.reply.edit(`Boğa rolü hesabınıza başarıyla verildi!`)
                }
            }
            if(button.id === "3") {
                if(button.clicker.member.roles.cache.get(client.BURC.ikizler)) {
                    await button.clicker.member.roles.remove(client.BURC.ikizler)
                    await button.think(true)
                    await button.reply.edit(`İkizler rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.BURC.ikizler)
                    await button.think(true)
                    await button.reply.edit(`İkizler rolü hesabınıza başarıyla verildi!`)
                }
            }
            if(button.id === "4") {
                if(button.clicker.member.roles.cache.get(client.BURC.yengec)) {
                    await button.clicker.member.roles.remove(client.BURC.yengec)
                    await button.think(true)
                    await button.reply.edit(`Yengeç rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.BURC.yengec)
                    await button.think(true)
                    await button.reply.edit(`Yengeç rolü hesabınıza başarıyla verildi!`)
                }
            }
            if(button.id === "5") {
                if(button.clicker.member.roles.cache.get(client.BURC.aslan)) {
                    await button.clicker.member.roles.remove(client.BURC.aslan)
                    await button.think(true)
                    await button.reply.edit(`Aslan rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.BURC.aslan)
                    await button.think(true)
                    await button.reply.edit(`Aslan rolü hesabınıza başarıyla verildi!`)
                }
            }
            if(button.id === "6") {
                if(button.clicker.member.roles.cache.get(client.BURC.basak)) {
                    await button.clicker.member.roles.remove(client.BURC.basak)
                    await button.think(true)
                    await button.reply.edit(`Başak rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.BURC.basak)
                    await button.think(true)
                    await button.reply.edit(`Başak rolü hesabınıza başarıyla verildi!`)
                }
            }
            if(button.id === "7") {
                if(button.clicker.member.roles.cache.get(client.BURC.terazi)) {
                    await button.clicker.member.roles.remove(client.BURC.terazi)
                    await button.think(true)
                    await button.reply.edit(`Terazi rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.BURC.terazi)
                    await button.think(true)
                    await button.reply.edit(`Terazi rolü hesabınıza başarıyla verildi!`)
                }
            }
            if(button.id === "8") {
                if(button.clicker.member.roles.cache.get(client.BURC.akrep)) {
                    await button.clicker.member.roles.remove(client.BURC.akrep)
                    await button.think(true)
                    await button.reply.edit(`Akrep rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.BURC.akrep)
                    await button.think(true)
                    await button.reply.edit(`Akrep rolü hesabınıza başarıyla verildi!`)
                }
            }
            if(button.id === "9") {
                if(button.clicker.member.roles.cache.get(client.BURC.yay)) {
                    await button.clicker.member.roles.remove(client.BURC.yay)
                    await button.think(true)
                    await button.reply.edit(`Yay rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.BURC.yay)
                    await button.think(true)
                    await button.reply.edit(`Yay rolü hesabınıza başarıyla verildi!`)
                }
            }
            if(button.id === "10") {
                if(button.clicker.member.roles.cache.get(client.BURC.oglak)) {
                    await button.clicker.member.roles.remove(client.BURC.oglak)
                    await button.think(true)
                    await button.reply.edit(`Oğlak rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.BURC.oglak)
                    await button.think(true)
                    await button.reply.edit(`Oğlak rolü hesabınıza başarıyla verildi!`)
                }
            }
            if(button.id === "11") {
                if(button.clicker.member.roles.cache.get(client.BURC.kova)) {
                    await button.clicker.member.roles.remove(client.BURC.kova)
                    await button.think(true)
                    await button.reply.edit(`Kova rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.BURC.kova)
                    await button.think(true)
                    await button.reply.edit(`Kova rolü hesabınıza başarıyla verildi!`)
                }
            }
            if(button.id === "12") {
                if(button.clicker.member.roles.cache.get(client.BURC.balık)) {
                    await button.clicker.member.roles.remove(client.BURC.balık)
                    await button.think(true)
                    await button.reply.edit(`Balık rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.BURC.balık)
                    await button.think(true)
                    await button.reply.edit(`Balık rolü hesabınıza başarıyla verildi!`)
                }
            }
        });};});

        //OYUN
client.on("message", async message => {
    let args = message.content.split("BUTONSİSTEM");
    if(args[0] !== "!buton3") return;
    else {
        let button_1 = new button.MessageButton()
        .setStyle('1')
        .setLabel('Gta')
        .setID('1')
        let button_2 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Counter')
        .setID('2')
        let button_3 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Valorant')
        .setID('3')
        let button_4 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Lol')
        .setID('4')
        let button_5 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Minecraft')
        .setID('5')
        let button_6 = new button.MessageButton()
        .setStyle('3')
        .setLabel('Ets2')
        .setID('6')
    
        await message.channel.send(`.`, {buttons: [button_1, button_2, button_3, button_4, button_5, button_6]})
        client.on("clickButton", async (button) => {
            if(button.id === "1") {
                if(button.clicker.member.roles.cache.get(client.GAME.gta)) {
                    await button.clicker.member.roles.remove(client.GAME.gta)
                    await button.think(true)
                    await button.reply.edit(`Gta rolü hesabınızdan başarıyla kaldırıdı!`)   
                } else { 
                    await button.clicker.member.roles.add(client.GAME.gta)
                    await button.think(true)
                    await button.reply.edit(`Gta rolü hesabınıza başarıyla verildi!`)
                }
            }
    
            if(button.id === "2") {
                if(button.clicker.member.roles.cache.get(client.GAME.cs)) {
                    await button.clicker.member.roles.remove(client.GAME.cs)
                    await button.think(true)
                    await button.reply.edit(`Counter rolü hesabınızdan başarıyla kaldırıldı!`)
                } else {
                    await button.clicker.member.roles.add(client.GAME.cs)
                    await button.think(true)
                    await button.reply.edit(`Counter rolü hesabınıza başarıyla verildi!`)
                }
            }
        if(button.id === "3") {
            if(button.clicker.member.roles.cache.get(client.GAME.valorant)) {
                await button.clicker.member.roles.remove(client.GAME.valorant)
                await button.think(true)
                await button.reply.edit(`Valorant rolü hesabınızdan başarıyla kaldırıldı!`)
            } else {
                await button.clicker.member.roles.add(client.GAME.valorant)
                await button.think(true)
                await button.reply.edit(`Valorant rolü hesabınıza başarıyla verildi!`)
            }
        }
        if(button.id === "4") {
            if(button.clicker.member.roles.cache.get(client.GAME.lol)) {
                await button.clicker.member.roles.remove(client.GAME.lol)
                await button.think(true)
                await button.reply.edit(`Lol rolü hesabınızdan başarıyla kaldırıldı!`)
            } else {
                await button.clicker.member.roles.add(client.GAME.lol)
                await button.think(true)
                await button.reply.edit(`Lol rolü hesabınıza başarıyla verildi!`)
            }
        }
        if(button.id === "5") {
            if(button.clicker.member.roles.cache.get(client.GAME.minecraft)) {
                await button.clicker.member.roles.remove(client.GAME.minecraft)
                await button.think(true)
                await button.reply.edit(`Minecraft rolü hesabınızdan başarıyla kaldırıldı!`)
            } else {
                await button.clicker.member.roles.add(client.GAME.minecraft)
                await button.think(true)
                await button.reply.edit(`Minecraft rolü hesabınıza başarıyla verildi!`)
            }
        }
        if(button.id === "6") {
            if(button.clicker.member.roles.cache.get(client.GAME.ets2)) {
                await button.clicker.member.roles.remove(client.GAME.ets2)
                await button.think(true)
                await button.reply.edit(`Ets2 rolü hesabınızdan başarıyla kaldırıldı!`)
            } else {
                await button.clicker.member.roles.add(client.GAME.ets2)
                await button.think(true)
                await button.reply.edit(`Ets2 rolü hesabınıza başarıyla verildi!`)
            }
        }
        });};});
client.login(client.SERVERSET.TOKEN)