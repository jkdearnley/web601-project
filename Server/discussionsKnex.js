/* In the file we are going to use knex with employee controller */


function listAllDiscussionsKnex(req, res) {
    /*We are going to use the latest Object destructuring of JS and this means 
        that knex is going to be extracted from locals object forming
    */
    const {
        knex
    } = req.app.locals
    knex
        .select('*')
        .from('discussions')
        /*We going to use a promise based lib */
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}

function listSingleDiscussions(req, res) {
    /* Here we are going to list information for a single employee */
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex
        .select('*')
        .from('discussions')
        .where({
            DiscussionID: `${id}`
        })
        /*We going to use a promise based lib */
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`Discussion with ID ${id} does not exist`);
            }
        })
        .catch(error => res.status(500).json(error))
}

function postDiscussions(req, res) {
    const {
        knex
    } = req.app.locals
    /* Now we are going to work with employees table and we can insert and then if we call
    a response for that. 
    */
    // console.log(req.body)
    const payload = req.body
    /* When you do a POST method you also send a payload with your POST req, express access the payload.
       We need to parse payload because Express does not see payload as part of the req body */
    const mandatoryColumns = ['Title', 'Content']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    if (mandatoryColumnsExists) {
        knex('discussions')
            .insert(payload)
            .then(response => res.status(201).json('Discussion record created'))
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}

function updateDiscussions(req, res) {
    // const {
    //     knex
    // } = req.app.locals
    // const {
    //     id
    // } = req.params
    // const payload = req.body
    // knex('employees')
    //     .where('id', id)
    //     .update(payload)
    //     .then(response => {
    //         if (response) {
    //             res.status(204).json()
    //         } else {
    //             return res.status(404).json(`Employee with id ${id} not found.`);
    //         }
    //     })
    //     .catch(error => res.status(500).json(error))
}

function deleteDiscussions(req, res) {
    // const {
    //     knex
    // } = req.app.locals
    // const {
    //     id
    // } = req.params
    // knex('employees')
    //     .where('id', id)
    //     .del()
    //     .then(response => {
    //         if (response) {
    //             res.status(200).json(`Employee with id ${id} is removed.`)
    //         } else {
    //             res.status(404).json(`Employee with id ${id} is not found.`)
    //         }
    //     })
    //     .catch(error => res.status(500).json(error))
}

module.exports = {
    listAllDiscussionsKnex,
    listSingleDiscussions,
    postDiscussions,
    updateDiscussions,
    deleteDiscussions
}