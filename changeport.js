const objApp = WizExplorerApp;
const objDatabase = WizExplorerApp.Database;
const objCommon = WizExplorerApp.CommonUI;
let port = objDatabase.GetMeta("WIZSEARCH", "PORT");
if (port == 0) port = '5000';
const ret = objCommon.GetIntValue("變更連接埠", "指定新的連接埠：",
                                   parseInt(port), 1, 65535, 1);
objDatabase.SetMeta("WIZSEARCH", "PORT", ret)
