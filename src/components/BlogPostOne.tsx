"use client";
import styles from "components/BlogPosts.module.css";

export default function BlogPostOne() {
  return (
    <div className={styles.blogPage}>
      <h1 className={styles.header}>
        {"An Example of the use of Prefixes and Suffixes for DSA"}
      </h1>
      <p className={styles.subHeader}>
        {
          'This post will use the popular DSA question "Product of Array Except Self" to explain the concept and use of prefixes and suffixes.'
        }
      </p>
      <p className={styles.mainText}>
        {
          '"Product of Array Except Self" is a popular data set and algorithm question asked in technical interviews. The questions reads as follows:'
        }
      </p>
      <p className={styles.mainText}>
        {
          '"Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].'
        }
      </p>

      <p className={styles.mainText}>
        {
          "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer."
        }
      </p>

      <p className={styles.mainText}>
        {
          'You must write an algorithm that runs in O(n) time and without using the division operation."'
        }
      </p>

      <p className={styles.mainText}>{"Two examples:"}</p>

      <div className={styles.exampleContainer}>
        <p className={styles.exampleHeader}>{"Example 1:"}</p>
        <ul className={styles.exampleList}>
          <a>{"Input: nums = [1, 2, 3, 4]"}</a>
          <a>{"Output: [24, 12, 8, 6]"}</a>
        </ul>

        <p className={styles.exampleHeader}>{"Example 2:"}</p>
        <ul className={styles.exampleList}>
          <a>{"Input: nums = [-1, 1, 0, -3, 3]"}</a>
          <a>{"Output: [0, 0, 9, 0, 0]"}</a>
        </ul>
      </div>

      <div className={styles.mainText}>
        {
          "There are many ways this problem can be solved, but we want to find an efficient solution. A naive or brute force approach could easily solve the problem. We could simply take an array like [1, 2, 3, 4] and iterate through 4 separate times and accumulate a product for nums[i] at every step except for a specific one every time, and append the end result of each loop into an array. The pseudocode would look something like this: for num in range(0, len(nums)): and then an inner for loop for i in range(0, len(nums)):, and a conditional if i == num (which would mean we are looking at an index we do not want to include in the product of all numbers except this index) we can skip, and if num != i, we can accumulate a product as we go. And at the end of the inner for loop, we can append that result to a new list. Then your outer loop would move to num = 1, and when you reach index 1 on the inner loop, it will get skipped, you will accumulate a product for everything except that index, and append that to your result list. This could work, but would be terribly inefficient and lead to a runtime of O(n^2). There is a much more elegant way to solve the problem. This is where prefix and suffix comes into play."
        }
      </div>

      <div className={styles.mainText}>
        {
          "The concept of prefixes and suffixes is simple. In terms of a product, the prefix of a given index/element represents the total product of every known element prior to index i. In other words, if we are looking at the array nums[1,2,3,4], and we choose a specific index, say nums[2] (value of 3), the total product of every value before that point (if we are traversing left to right) is 2. If you look at the next index after index 2 (nums[3]), the total product of everything before that point would be 6 (because the previous numbers were 1, 2, and 3). If we accumulated a list of prefixes from left to right, technically you would end up with [0, 1, 2, 6]. The first index is 0 because when at index 0, it is impossible to know what the prefix product of all numbers before that point is because there are no numbers before that point."
        }{" "}
      </div>
      <div className={styles.mainText}>
        {
          'Suffix is literally the same thing but while traversing from right to left. If you use the same exact method, but starting from the right side, you would end up with a list of [24,12,4,0]. Now, we have a list of prefixes [0, 1, 2, 6] and [24, 12, 4, 0]. If you were to traverse both of these lists at the same time, starting from the left, we can ask "if i multiply prefix[0] by suffix[0], I am multiplying the product of every known number from before prefix[0] with every known number from after suffix[0]. Prefix 0 correctly is 1 right now, but if we want to multiply it with suffx[0], we need to get set it to 1 in order to actually get the appropriate product. So the prefix list actually looks like this [1,1,2,6] and suffix is [24,12,4,1]. When you multiply prefix[0] and suffix[0], you are effectively multiplying the prodcut of everything in nums before nums[0] which we set to 1, with the product in everything in nums after nums[0] (which is 24). Then with the next index ( 1 ), we have prefix[1] ( still 1 ) * suffix[1] (12) and the answer represents the product of every number except the original nums[i]. This is a two-pass prefix and suffix solution that gaurentees we only ever have to traverse the list twice, instead of the naive approach where you would have to traverse the list the same number of times as the length of the list. The prefix/suffix method leads to a runtime of O(n).'
        }{" "}
      </div>
    </div>
  );
}
