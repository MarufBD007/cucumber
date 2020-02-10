require('dotenv').config()
const express = require('express')
const http = require('http');
const rimraf = require("rimraf");
const app = express()

const USER = 'MarufBD007';
const PASS = '007BDMaruf';
const REPO = 'github.com/MarufBD007/cucumber.git';

const git = require('simple-git/promise');
//const remote = `https://${USER}:${PASS}@${REPO}`;
const remote = `https://${USER}:cb15be9c205e0d759781c70573d54d6fc74a49f3@${REPO} ./cucumber`;
console.log(remote);

function initialiseRepo(git) {
    return git().silent(true).outputHandler((command, stdout, stderr) => {
        stdout.pipe(process.stdout);
        stderr.pipe(process.stderr);
    }).clone(remote)
        .then(() => {
            console.log('finished');
        }).catch((err) => console.error('failed: ', err));
}

// // results in 'git pull origin master --no-rebase'
// git().pull('origin', 'master', { '--no-rebase': null })
(async () => {
    // process.chdir('/cucumber');
    // await git().branch()


    await git("cucumber").checkIsRepo()
        .then(isRepo => !isRepo && initialiseRepo(git));
    await process.chdir('./cucumber');
    console.log(process.cwd());
    await git().fetch();
    await git().checkout("tst");
    await git().add('./*')
        .commit("first commit!")

        .push(['-u', 'origin', 'tst'], () => console.log('done'));
    // await git().branch().then(async (branch) => {
    //     console.log(branch.current);
    //     await git().mergeFromTo("origin/tst", "origin/master").then(response => {
    //         console.log(response);
    //         git().push(['-u', 'origin', 'master'], () => console.log('done'));
    //     });
    // });




})()
