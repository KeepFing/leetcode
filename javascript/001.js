/*
 * @version: 1.0
 * @Description: 给定一个整数数组 nums 和一个目标值 target，在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标
 * @Author: WangWen
 * @LastEditors: WangWen
 * @email: bear393048@163.com
 * @Date: 2019-05-10 09:43:13
 * @LastEditTime: 2019-05-10 09:53:14
 */


/**
 * @version: 1.0
 * @description: description
 * @param : nums:{Array}, target:{Number}
 * @return: {Number}
 */
var twoSum = function(nums, target) {
    let indexs=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                indexs.push([i,j])
            }
        }
    }
    return indexs
};