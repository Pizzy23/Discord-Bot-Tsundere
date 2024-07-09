class ClearStringClass {
  cabacoClear(input) {
    let validation = input.replace(/[*&cabaco]/g, "") || (/[&*c]/g, "");
    validation = validation.replace(/[0-9]/g, "");
    validation = validation.replace(/[<@>]/g, "");
    return (validation = validation.replace(/\s/g, ""));
  }
}
module.exports = { ClearStringClass };
