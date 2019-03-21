//config
const express = require(`express`)
const app = express()
const port = 11223
const fs = require(`fs`);

let Students = fs.readFileSync(`./students.json`, `utf8`);
Students = JSON.parse(Students);

app.use(express.static(`dist`));

//routing
app.get(`/`, (req, res) => {
    res.sendFile(`index.html`, { root: `${__dirname}/dist` }, (err) => {
        res.end();
        if (err)
            throw (err);
    });
});

app.get(`/handler`, (req, res) => {

    let action=req.query.action;
    let query=req.query.data;
    //a list of actions

    if (action == `list`) {
        let responseString = ``;

        for (item in Students)
            responseString += `"${item}":${Students[item]}<br>`
        
        res.send(responseString);
    }

    else if (action == `search`) {
        if (query.id == ``) return;
        else {
            if (Students[query.id] != undefined)
                res.send(Students[query.id]);
            else
                res.send(`not found!`);
        }
    }

    else if(action==`add`){
        if(query.name==``||query.id==``) return;
        else{
            if(Students[query.id]==undefined){
                Students[query.id]=query.name;
                res.send(`successfully add`);
            }
            else res.send(`already have this id`);
        }
    }

    else if(action==`delete`){
        if (query.id == ``) return;
        else{
            if(Students[query.id]!=undefined){
                delete Students[query.id];
                res.send(`successfully deleted`);
            }
            else res.send(`do not have this student`);
        }
    }
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})
