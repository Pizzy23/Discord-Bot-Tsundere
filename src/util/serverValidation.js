class ValidationServer {
  vali(client, message) {
    const validServer = client.config.serverPermissions;
    if (
      validServer.includes(message.guild.id) ||
      message.author == client.config.master
    ) {
      return true;
    }
    return false;
  }
  valiCabaco(client, message) {
    const validServer = client.config.serverPermissions;
    if (validServer.includes(message.guild.id)) {
      return true;
    }
    return false;
  }
  valiPhasmo(client, message) {
    const validServer = client.config.serverPermissions;
    if (
      client.config.serverPermissions[2] == message.guild.id ||
      client.config.serverPermissions[1] == message.guild.id ||
      client.config.serverPermissions[3] == message.guild.id ||
      client.config.serverPermissions[4] == message.guild.id
    ) {
      return true;
    }
    return false;
  }
}

module.exports = { ValidationServer };
