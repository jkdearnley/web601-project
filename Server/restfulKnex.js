const express = require('express');
const app = express()
const router = express.Router()

const config = require('./config')
//const data = require('./data')

const middlewares = require('./middlewares')
const bodyParser = require('body-parser')


/*Now we can make our payload as json format so it can be understood*/
const jsonParser = bodyParser.json() /*We only going to use the jasonParser as middleware */

/* 
We are going to require knex and then immediately going to pass in a configuration object,
first of all we need to specify the client and then connection
 */
const knex = require('knex')({
    client: 'mysql',
    connection: config.database
})

/*
Then we will take app.locals again and add the knex object 
 */
app.locals.knex = knex

/*  We are going to require routes */
const routes = require('./routes')

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// router.get('/employees', routes.employeesList.listAllEmployees); // This line is for mysql native package
router.get('/discussions', routes.discussionsList.listAllDiscussionsKnex);
/* Here we are going to get a single employee by accessing id parameter */
router.get('/discussions/:id', middlewares.checkID, routes.discussionsList.listSingleDiscussions);
/* Now we are going to POST to the employees list but we need to make sure to create a need record in db*/
router.post('/discussions', jsonParser, routes.discussionsList.postDiscussions);
/* Now we are going to use PATCH to update employee data, so we need to create a handler function*/
router.patch('/discussions/:id', jsonParser, middlewares.checkID, routes.discussionsList.updateDiscussions)
/* Now we are going to use DELETE to remove an employee from the table */
router.delete('/discussions/:id', middlewares.checkID, routes.discussionsList.deleteDiscussions)


// router.get('/department', routes.departmentList.listAllDepartments);
// router.get('/department/:id', middlewares.checkID, routes.departmentList.listSingleDepartment);
// router.post('/department', jsonParser, routes.departmentList.postDepartment);
// router.patch('/department/:id', jsonParser, middlewares.checkID, routes.departmentList.updateDepartment)
// router.delete('/department/:id', middlewares.checkID, routes.departmentList.deleteDepartment)

app.use('/api', router);


app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});