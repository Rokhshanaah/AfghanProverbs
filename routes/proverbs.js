const express = require('express');
const fs = require('fs');
const path =require('path');
const filepath = path.join(__dirname, '../data/proverbs.json');

function redData(){
    return JSON.parse(fs.readFileSync(filepath));

}

function writeData(data){
    fs.writeFileSync(filepath,JSON.stringify(data,null,2));
    Router.get('/',(req,res) =>{
        const {category,search} =req.query;
        let data =readData();

        if(category){
            data = data.filter(p => p.category===category);
        }
        if(search){
            data = data.filter(p =>
                p.textDari.includes(search)||
                p.textPashto.includes(search)||
                p.transalatonEn.includes(search)
                

            );
        }
res.JSON(data);
    });
    router.get('/random',(req,res)=>{
        const data =readData();
        const randomProverb = data[(Math.random()*data.lenght)];
    res.JSON(randomProverb);

    });
    router.get('/:id',(req,res)=>{
        const data = readData();
        const proverb =data.find(p=>p.id === parseInt(req.params.id));
        proverb ? res.json(proverb):res.status(404).send('Not found');

    });
    router.post('/',(req,res)=>{
        const data = readData();
        const newProverb = {id:Date.now(),...req.body};
        data.push(newProverb);
        writeData(data);
        res.status(201).json(newProverb)

        
    });

    router.put('/:id',(req,res)=>{
        const data = readData();
        const index =data.findindex(p=>p.id === parseInt(req.params.id));
        if(index !==-1){
            data[index]= {...data[index], ...req.body};
        writeData(data);
res.json(data[index]);
res.status(404).send('Not found');

        }else{

        }
    });

    router.delet('/:id',(req,res)=>{
        const data = readData();
        const index =data.findindex(p=>p.id === parseInt(req.params.id));
        if(newData.lenght !== data.lenght){
           
        writeData(data);

        res.status(204).send();
        
    }else{
            res.status(404).send('Not found');

        }
    });

    
}
    module.exports=router;