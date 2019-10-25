const fs = require('fs');
const file = 'burntssn.txt';

function readJSONSync(filename){
    return JSON.parse(fs.readFileSync(filename, 'utf8'));
}

function readJSON(filename, callback){
    fs.readFile(filename, 'utf8', function(err, res){
        if(err) return callback(err);
        callback(null, JSON.parse(res));
    });
}

///

function readJSON(filename, callback){
    fs.readFile(filename, 'utf8', function(err, res){
        if (err) return callback(err);
        try{
            res = JSON.parse(res);
        } catch(ex){
            return callback(ex);
        }
        callback(null, res);
    });
}

///

function readFile(filename, enc){
    return new Promise(function (fulfill, reject){
        fs.readFile(filename, enc, function(err, res){
            if(err) reject(err);
            else fulfill(res);
        });
    });
}

function readJSON(filename){
    return new Promise(function (fulfill, reject){
        readFile(filename, 'utf8').done(function (res){
            try{
                fulfill(JSON.parse(res));
            } catch(ex){
                reject(ex);
            }
        }, reject);
    });
}

///

function readJSON(filename){
    return readFile(filename, 'utf8').then(function (res){
        return JSON.parse(res);
    });
}

///

const parseJSON = o => {
    try{
        const data = JSON.parse(o);
        return {ok: true, data};
    } catch(error) {
        return {ok: false, error};
    }
};
const readJSON = o => {
    try{
        const string = fs.readFileSync(o).toString('utf8');
        const result = parseJSON(string);
        if(result.ok){
            return {ok: true, data: result.data};
        } else{
            return result;
        }
    } catch(error){
        return {ok: false, error}
    }
};

const {ok, error, data} = readJSON(file);
if(ok){
    console.log('OKAY');
} else{
    console.error(`readJSON failed: ${error}`);
}