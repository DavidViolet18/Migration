!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("moment")},function(e,t){e.exports=require("deepextend")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=n(0),s=n(1),u=n(2),c=n(3),l=function(){function e(){this._config=void 0,this._sequelize=void 0,this._migrationFolder=void 0}return e.prototype.setup=function(t){return this._config=u(e.defaultOptions,t),this.init(),this},e.prototype.getConfig=function(){return this._config},e.prototype.init=function(){this._sequelize=new o(this._config.database),this._migrationFolder=a.resolve(this._config.migrationFolder)},e.prototype.connectToDatabase=function(){return r(this,void 0,void 0,function(){var e=this;return i(this,function(t){switch(t.label){case 0:return[4,this._sequelize.authenticate().then(function(){}).catch(function(t){return e.onError(t)})];case 1:return t.sent(),[2]}})})},e.prototype.getDatabaseMigrationTime=function(e){return r(this,void 0,void 0,function(){var t,n,r;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),e||(e=1),[4,this.connectToDatabase()];case 1:return i.sent(),t="\n            CREATE TABLE IF NOT EXISTS migrations (\n                id int(11) NOT NULL AUTO_INCREMENT,\n                name varchar(255) NOT NULL,\n                run_on datetime NOT NULL,\n                PRIMARY KEY (id)\n            )",[4,this._sequelize.query(t)];case 2:return i.sent(),void 0,[4,this._sequelize.query("SELECT * FROM migrations order by run_on desc limit "+e,{type:o.QueryTypes.SELECT})];case 3:return(n=i.sent())?[2,n.map(function(e){return e.name})]:[2,[]];case 4:return r=i.sent(),this.onError(r),[3,5];case 5:return[2]}})})},e.prototype.createSqlMigration=function(e,t){return[{path:e,filename:t+"_up.sql",content:""},{path:e,filename:t+"_down.sql",content:""}]},e.prototype.createJsMigration=function(e,t){return[{path:e,filename:t+".js",content:"\n            \nexports.setup = async function(db){\n    return null;\n}\n        \n            \nexports.up = async function(db){\n    return null;\n}\n        \n            \nexports.down = async function(db){\n    return null;\n}\n        \n        "}]},e.prototype.createFile=function(e){var t=a.join(e.path,e.filename);c.existsSync(e.path)||c.mkdirSync(e.path),c.writeFileSync(t,e.content),this._config.logger("Create file "+t)},e.prototype.onError=function(e){this._config.logger("Error : "+e.message)},e.prototype.migrationNameToDate=function(e){var t=new RegExp(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/i),n=e.match(t);if(7==n.length)return new Date(parseInt(n[1]),parseInt(n[2])-1,parseInt(n[3]),parseInt(n[4]),parseInt(n[5]),parseInt(n[6]))},e.prototype.dateToMigrationName=function(e){return s(e).format("YYYYMMDDHHmmss")},e.prototype.execSQLFile=function(e){return r(this,void 0,void 0,function(){var t,n,r,o,s;return i(this,function(i){switch(i.label){case 0:this._config.logger("Execute ["+e+"]"),t=c.readFileSync(a.join(this._migrationFolder,e)).toString(),n=t.replace(/\r\n/gm,"").split(";"),r=0,i.label=1;case 1:if(!(r<n.length))return[3,6];if(""==(o=n[r]).trim())return[3,5];i.label=2;case 2:return i.trys.push([2,4,,5]),[4,this._sequelize.query(o)];case 3:return i.sent(),[3,5];case 4:return s=i.sent(),this.onError(s),[3,5];case 5:return r++,[3,1];case 6:return[2,!0]}})})},e.prototype.execJSFile=function(e){return r(this,void 0,void 0,function(){return i(this,function(t){return this._config.logger("Execute ["+e+"]"),[2,!0]})})},e.prototype.createMigration=function(e,t){var n=this;try{var r=this._migrationFolder,i=s().format("YYYYMMDDHHmmss");"string"==typeof e&&(i+="-"+e),Array.isArray(e)&&(i+="-"+e.join("-"));var o=t;o||(o=this._config.extension);var a=[];"js"==o&&(a=this.createJsMigration(r,i)),"sql"==o&&(a=this.createSqlMigration(r,i)),a.forEach(function(e){return n.createFile(e)})}catch(e){this.onError(e)}},e.prototype.up=function(e){return r(this,void 0,void 0,function(){var t,n,r,o,a,u,l,f=this;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,11,,12]),e||(e={}),[4,this.connectToDatabase()];case 1:return i.sent(),[4,this.getDatabaseMigrationTime(1)];case 2:t=i.sent(),n=new Date(1900,1,1,0,0,0),r=e.toDate||new Date,t&&t.length>0&&(n=this.migrationNameToDate(t[0])),o=[],c.readdirSync(this._migrationFolder).forEach(function(e){var t=f.migrationNameToDate(e);t&&s(t).isAfter(s(n))&&s(t).isBefore(r)&&o.push(e)}),a=0,i.label=3;case 3:return a<o.length?o[a].match(/\.js$/g)?[4,this.execJSFile(o[a])]:[3,5]:[3,10];case 4:return i.sent(),[3,7];case 5:return o[a].match(/_up\.sql$/g)?[4,this.execSQLFile(o[a])]:[3,7];case 6:i.sent(),i.label=7;case 7:return u="INSERT INTO migrations (name, run_on) VALUES ('"+o[a]+"', '"+s().format("YYYY-MM-DD HH:mm:ss")+"')",[4,this._sequelize.query(u)];case 8:i.sent(),i.label=9;case 9:return a++,[3,3];case 10:return[2,!0];case 11:return l=i.sent(),this.onError(l),[3,12];case 12:return[2]}})})},e.prototype.down=function(e){return r(this,void 0,void 0,function(){var t,n,r,o,a,s;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,11,,12]),e||(e={}),t=1,[4,this.connectToDatabase().catch(function(e){throw e})];case 1:return i.sent(),[4,this.getDatabaseMigrationTime(t)];case 2:n=i.sent(),r=[],c.readdirSync(this._migrationFolder).forEach(function(e){n.find(function(t){return t.replace("_up.sql","_down.sql")==e})&&r.push(e)}),o=0,i.label=3;case 3:return o<r.length?r[o].match(/\.js$/g)?[4,this.execJSFile(r[o]).catch(function(e){throw e})]:[3,5]:[3,10];case 4:return i.sent(),[3,7];case 5:return r[o].match(/_down\.sql$/g)?[4,this.execSQLFile(r[o]).catch(function(e){throw e})]:[3,7];case 6:i.sent(),i.label=7;case 7:return a="DELETE FROM migrations where name like '"+r[o].replace("_down.sql","_up.sql")+"'",[4,this._sequelize.query(a).catch(function(e){throw e})];case 8:i.sent(),i.label=9;case 9:return o++,[3,3];case 10:return[2,!0];case 11:return s=i.sent(),this.onError(s),[3,12];case 12:return[2]}})})},e.getInstance=function(){return void 0==e.__instance&&(e.__instance=new e),e.__instance},e.defaultOptions={database:{dialectOptions:{multipleStatements:!0}},migrationFolder:a.resolve("migrations"),extension:"js",logger:console.log},e}();t.Migration=l},function(e,t){e.exports=require("sequelize")}]);