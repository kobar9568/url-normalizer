"use strict";

/**
 * 入力が archive.is のページURL（?url=型でも末尾直結型でもOK）として、
 * 内部の X/Twitter ツイートURLを取り出してツイートIDへ変換。
 * 見つからなければ null を返す。
 */
function extractTweetIdFromArchiveUrl(pageUrl) {
  // 1) archive.is の中から X/Twitter のツイートURLそのものを抜き出す
  //   - ?url=型: https://archive.is/?url=https://x.com/user/status/123...
  //   - 直結型:  https://archive.is/abcd1234https://x.com/user/status/123...
  const m1 = pageUrl.match(
    /(https:\/\/(?:x\.com|twitter\.com)\/@?[A-Za-z0-9_]{1,15}\/(?:status\/)?\d{19}(?:[\/?#][^\s]*)?)/
  );
  if (!m1) return null;

  const tweetUrl = m1[1];

  // 2) ツイートURLからツイートIDだけを抜く（/status/ はあってもなくてもOK）
  const m2 = tweetUrl.match(
    /^https:\/\/(?:x\.com|twitter\.com)\/@?[A-Za-z0-9_]{1,15}\/(?:status\/)?(\d{19})/
  );
  return m2 ? m2[1] : null;
}

/**
 * archive.is用の正規化URLを作る:
 *   https://archive.is/?url=https://x.com/i/status/<id>
 */
function toNormalizedArchiveUrl(pageUrl) {
  const tweetId = extractTweetIdFromArchiveUrl(pageUrl);
  if (!tweetId) return null;
  // 現在の archive ドメインを維持したければ location.origin を使う
  const archiveOrigin = location.origin; // 例: https://archive.is
  return `${archiveOrigin}/?url=https://x.com/i/status/${tweetId}`;
}

/**
 * 現在の履歴URLを書き換え
 */
(function replaceNormalizedURL() {
  const newUrl = toNormalizedArchiveUrl(location.href);
  if (newUrl) {
    // stateObj, title, url
    history.replaceState(null, "", newUrl);
  }
})();
