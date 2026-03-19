"use client";
import styles from "components/BlogPosts.module.css";
export default function BlogPostThree() {
  return (
    <div className={styles.blogPage}>
      <h1 className={styles.header}>
        {
          "Finding the Longest Common Subsequence of Two Strings with 2D-DP (2 Dimensional Dynamic Programming)"
        }
      </h1>
      <p className={styles.subHeader}>
        {
          'This post will use the popular DSA question "Longest Common Subsequence" to explain one form of two dimensional dynamic programming (2D-DP).'
        }
      </p>
      <p className={styles.mainText}>
        {
          '"Longest Common Subsequence" is a classic data set and algorithm question and can be used to help understand this version of 2D-DP. The questions reads as follows:'
        }
      </p>
      <p className={styles.mainText}>
        {
          "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0."
        }
      </p>

      <p className={styles.mainText}>
        {
          "A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters."
        }
      </p>

      <p className={styles.mainText}>
        {'For example, "ace" is a subsequence of "abcde".'}
      </p>

      <p className={styles.mainText}>
        {
          "A common subsequence of two strings is a subsequence that is common to both strings."
        }
      </p>

      <div className={styles.exampleContainer}>
        <p className={styles.exampleHeader}>{"Example 1:"}</p>
        <ul className={styles.exampleList}>
          <a>{'Input: text1 = "abcde", text2 = "ace"'}</a>
          <a>{"Output: 3"}</a>
          <a>
            {
              'Explanation: The longest common subsequence is "ace" and its length is 3.'
            }
          </a>
        </ul>

        <p className={styles.exampleHeader}>{"Example 2:"}</p>
        <ul className={styles.exampleList}>
          <a>{'Input: text1 = "abc", text2 = "abc"'}</a>
          <a>{"Output: 3"}</a>
          <a>
            {
              'Explanation: The longest common subsequence is "abc" and its length is 3.'
            }
          </a>
        </ul>

        <p className={styles.exampleHeader}>{"Example 3:"}</p>
        <ul className={styles.exampleList}>
          <a>{'Input: text1 = "abc", text2 = "def"'}</a>
          <a>{"Output: 0"}</a>
          <a>
            {
              "Explanation: There is no such common subsequence, so the result is 0."
            }
          </a>
        </ul>
      </div>

      <div className={styles.mainText}>
        {
          "Before solving the problem, it helps to explain what makes something a dynamic programming problem at all. First, DP problems always have a subproblem that gets solved repeatedly. For LCS, that repeated subproblem is comparing smaller and smaller prefixes of the two strings. Second, DP problems can be broken down into smaller versions of themselves, and LCS fits that perfectly because the LCS of the full strings depends on the LCS of their prefixes.Third, DP stores results so we don’t recompute them later. In LCS, we save the LCS length for every pair of prefixes so we can reuse those answers instead of recalculating them from scratch. "
        }
      </div>

      <div className={styles.mainText}>
        {
          "What makes this problem 2D DP instead of regular 1D DP is the fact that we are dealing with two separate data sources: text1 and text2. In a typical 1D DP problem, like climbing stairs or counting ways to reach a target, you only track one sequence of states, so a single array is enough. Here, every decision depends on a pair of positions from each string. That forces us to build a grid, because the value at dp[i][j] depends on the prefixes of both strings. Once you’re comparing two sequences character‑by‑character, the DP table naturally becomes two‑dimensional."
        }
      </div>

      <div className={styles.mainText}>
        {
          "You end up building a grid that represents the LCS between smaller versions of the two text inputs. Each cell in the grid answers the question: “What is the longest common subsequence between the first i characters of text1 and the first j characters of text2?” Each row corresponds to a prefix of text1, and each column corresponds to a prefix of text2. The cell at (i, j) represents the best LCS you can form using only those prefixes. In other words, the table is a map of every possible prefix‑to‑prefix comparison between the two strings. Once the table is filled, the bottom‑right cell represents the best subsequence for the full strings."
        }
      </div>
      <div className={styles.mainText}>
        {
          'Now for the actual logic. Let’s say you’re comparing prefix "a" from text1 with prefix "ace" from text2. There’s only one common character between them, and the current characters don’t match, so you can’t extend the LCS. In that case, you use the rule: dp[i][j] = max(dp[i‑1][j], dp[i][j‑1]). This is the “top or left” rule. You take the better LCS you already found by ignoring one character or the other. If the characters do match, like comparing "abcde" and "ace", then you know you can extend the previous LCS. That uses the diagonal rule: dp[i][j] = dp[i‑1][j‑1] + 1. This means the matching character adds one to the best LCS you had before either of these characters were included.'
        }
      </div>
    </div>
  );
}
