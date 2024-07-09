const { EmbedBuilder, Collection, PermissionsBitField } = require("discord.js");

function check_if_dj(client, member, song) {
  if (!client) return false;
  var roleid = member.guild.id;
  if (String(roleid) == "") return false;

  var isdj = false;
  if (roleid == "558306899288915970" || roleid == "1016098280133898293")
    return true;

  if (
    !isdj &&
    !member.permissions.has(PermissionsBitField.Flags.Administrator) &&
    song.user.id != member.id
  )
    return roleid.map((i) => `<@&${i}>`).join(", ");
  else return false;
}

module.exports = {
  check_if_dj,
};
