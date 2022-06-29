function twoSum(nums: number[], target: number): number[] {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                console.log("i:", i, " j:", j);
                return [i, j];
            }
        }
    }
    return [0, 0];
}

const b = [
    { n: [2, 7, 11, 15], t: 9 },
    { n: [3, 2, 4], t: 6 },
    { n: [3, 3], t: 6 },
];

b.forEach((x, i) => {
    twoSum(x.n, x.t);
});
