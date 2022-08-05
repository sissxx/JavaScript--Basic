function small(input) {

    let product = input[0];
    let town = input[1];
    let count = input[2];
    let result = "";

    switch (product) {
        case "coffee":
            switch (town) {
                case "Sofia":
                    result = count * 0.5;
                    break;
                case "Plovdiv":
                    result = count * 0.4;
                    break;
                case "Varna":
                    result = count * 0.45;
                    break;

            }
            break;
        case "water":
            switch (town) {
                case "Sofia":
                    result = count * 0.8;
                    break;
                case "Plovdiv":
                    result = count * 0.7;
                    break;
                case "Varna":
                    result = count * 0.7;
                    break;
            }
            break;
        case "beer":
            switch (town) {
                case "Sofia":
                    result = count * 1.2;
                    break;
                case "Plovdiv":
                    result = count * 1.15;
                    break;
                case "Varna":
                    result = count * 1.10;
                    break;
            }
            break;
        case "sweets":
            switch (town) {
                case "Sofia":
                    result = count * 1.45;
                    break;
                case "Plovdiv":
                    result = count * 1.3;
                    break;
                case "Varna":
                    result = count * 1.35;
                    break;
            }
            break;
        case "peanuts":
            switch (town) {
                case "Sofia":
                    result = count * 1.6;
                    break;
                case "Plovdiv":
                    result = count * 1.5;
                    break;
                case "Varna":
                    result = count * 1.55;
                    break;
            }

    }
    console.log(result);

}
small(["coffee",
"Varna",
"2"])
