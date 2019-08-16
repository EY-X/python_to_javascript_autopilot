function get_new_car() {
    return {
        city : 'Toronto',
        passengers : 0,
        gas : 100,
    }
}

function add_car(cars, new_car) {
    cars.push(new_car)
    return `Adding a new car to Fleet. Fleet size is now ${cars.length}`

}

function pick_up_passenger(car) {
    car['passengers'] += 1;
    car['gas'] -= 10;
    return `Picked up passenger. Car now has ${car['passengers'].length} passengers`
}

function get_destination(car) {
    if (car['city'] == 'Toronto') {
        return 'Mississauga'
    } else if (car['city'] == 'Mississauga') {
        return 'London'
    } else if (car['city'] == 'London') {
        return 'Toronto'
    }
}

function fill_up_gas(car) {
    old_gas = car['gas'];
    car['gas'] = 100;
    return `Filled up to ${get_gas_display(car['gas'])} on gas from ${get_gas_display(old_gas)}.`
}

function  get_gas_display(gas_amount) {
    return `${gas_amount}`
}

function drive(car, city_distance) {
    if (car['gas'] < city_distance) {
        return fill_up_gas(car)
    }
    car['city'] = get_destination(car)
    car['gas'] -= city_distance
    return `Drove to ${car['city']}. Remaining gas: ${car['gas']}.`
}

function drop_off_passengers() {
    previous_passengers = car['passengers']
    car['passengers'] = 0
    return `Dropped off ${previous_passengers} passengers.`

}

function act(car) {
    distance_between_cities = 20 
    if (car['gas'] < 20) {
        return fill_up_gas(car)
    } else if (car['passengers'] < 3) {
        return pick_up_passenger(car)
    } else if (car['gas'] < distance_between_cities) {
        return fill_up_gas(car)
    }

    drove_to = drive(car, distance_between_cities)
    passengers_dropped = drop_off_passengers(car)
    return `${drove_to} ${passengers_dropped}`
}

function command_fleet(cars) {
    let x = 1
    for (let x = 0; x < cars.length; x++) {
        action = act(cars[x]);
        console.log(`Car ${x}: ${action} `);
        i += 1
    }
    console.log('---')
}

function add_one_car_per_day(cars, num_days) {
    for (let x = 0; x < num_days; x++){
        new_car = get_new_car();
        console.log(add_car(cars, new_car));
        command_fleet(cars);
    }
}

var cars = [];
add_one_car_per_day(cars, 12);