export const average = (array) => {
    let sum = 0;
    for (let p = 0; p < array.length; p++) {
        sum += array[p];
    }
    return sum / array.length
}


export const lastWeekResponseCalculator = (student) => {

    /*    let tempResponses = Array(student[0].questionList.length).fill([])*/
    let tempResponses = [[], [], [], [], []]
    for (let j = 0; j < student.length; j++) {
        for (let i = 0; i < student[j].questionList.length; i++) {
            tempResponses[i].push(student[j].questionList[i].response)
        }
    }

    let finalResponses = []

    for (let v = 0; v < tempResponses.length; v++) {
        finalResponses.push(average(tempResponses[v]))
    }
    return finalResponses

}


export const allWeekResponseCalculator = (week) => {
    let responses = []

    for (let i = 0; i < week.length; i++) {
        for (let j = 0; j < week[i].questionList.length; j++) {
            responses.push(week[i].questionList[j].response)
        }
    }
    if (responses.length > 0) {
        const sum = responses.reduce((curr, acc) => {
            return curr + acc
        })

        return sum / responses.length
    }
    return null
}