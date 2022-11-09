const utilsFunction: object = {
    deleteArrItem(arr: any[], item: any): Array<any> {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                break;
            }
        }
        return arr;
    }
};

export default utilsFunction;
