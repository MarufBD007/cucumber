require('dotenv').config()
const express = require('express')
const fs = require("fs");
const USER = 'MarufBD007';
const PASS = '007BDMaruf';
const REPO = 'github.com/MarufBD007/cucumber.git';

const git = require('simple-git');
const gitP = require('simple-git/promise');
const remote = `https://${USER}:${PASS}@${REPO}`;
//const remote = `https://${USER}:cb15be9c205e0d759781c70573d54d6fc74a49f3@${REPO} ./cucumber`;
console.log(remote);

function initialiseRepo() {
    return gitP().silent(true).outputHandler((command, stdout, stderr) => {
        stdout.pipe(process.stdout);
        stderr.pipe(process.stderr);
    }).clone(remote)
        .then(() => {
            console.log('finished');
        }).catch((err) => console.error('failed: ', err));
}
(async () => {
    if (!fs.existsSync("./cucumber")) {
        await initialiseRepo();
    }

    await process.chdir('./cucumber');
    console.log(process.cwd());
    await gitP().fetch();
    await gitP().checkout("tst");
    await gitP().branch().then((branch) => {
        console.log(branch.current);
    });
    git().add('./*').push(['-u', 'origin', 'tst'], () => console.log('done'));

})()
