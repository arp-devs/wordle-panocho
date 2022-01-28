export const cellStateReducer = (state) => {

    switch (state) {
        case "correct":
            return "correct-cell";
            
        case "incorrect":
            return "incorrect-cell";
            
        case "misplaced":
            return "misplaced-cell";

        default:
            return "";
    }
}