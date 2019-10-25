let template = require('../views/template-main');
let test_data = require('../model/test-data');
exports.get = (req, res) => {
    let teamlist = test_data.teamlist;
    let strTeam = "",
    i = 0;
    for (i = 0; i < teamlist.count;i++){
        strTeam = `${strTeam} <li> ${teamlist.teams[i].country} </li>`;
    }
    strTeam = `<ul>${strTeam}</ul>`;
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    const homepage = template.build("Test web page on node.js", "Hello there", `<p> The teams in group ${teamlist.GroupName} for Euro 2012 are: </p>
    ${strTeam}`);
    res.write(homepage);
    res.end();
}
