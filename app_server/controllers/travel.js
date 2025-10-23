const tripsEndpoint = 'https:///localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
}




/* Get travel view */
const travel = async function (_req, res, _next) {
    try {
        const response = await fetch(tripsEndpoint, options);
        const json = await response.json();
        let message = null;
        if (!(json instanceof Array)) {
            message = 'API lookup error';
            res.render('travel', { title: 'Travlr Foods', trips: [], message });
        } else {
            if (json.length === 0) {
                message = 'No trips exist in our database';
            }
            res.render('travel', { title: 'Travlr Foods', trips: json, message });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    travel,
};