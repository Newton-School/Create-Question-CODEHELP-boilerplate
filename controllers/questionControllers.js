const Question   = require("../models/question.js");
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'NEWTONSCHOOL';

/*

request.body = { 
    questionName,
    topic,
    rating, 
    link,
    status,
    token 
}

the token here is a JWT token.

1. Create new question from request body for given user.
2. Save questionName, topic, rating, link, status and creatorId for every question.
3. "creatorId" is "userId" in payload that we get from the JWT token.

Response :

1. Missing token 

401 Status Code

json = 
{
    status: 'fail',
    message: 'Missing token'
}

2. Invalid token

401 Status Code

json = 
{
    status: 'fail',
    message: 'Invalid token'
}

3. Success

200 Status Code

json = 
{
    message: 'Question added successfully to questionBank',
    questionId: question._id, //id of question that is created.
    status: 'success'
}

4. Fail to do

500 Status Code
json = 
{
    status: 'fail',
    message: error message
}

*/

const createQuestion = async (req, res) => {

    const { questionName, topic, rating, link, status, token } = req.body;

    try{
        //Write your code here.
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }
}

module.exports = { createQuestion };
