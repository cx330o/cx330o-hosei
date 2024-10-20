import { useEffect, useState } from "react";

/**
 * 現在時刻を返すカスタムフック。
 * setInterval を使用し、コンポーネントのアンマウント時に自動でクリーンアップする。
 *
 * @param intervalMs 更新間隔（ミリ秒）。デフォルトは 1000ms。
 * @returns 現在の Date オブジェクト
 */
export function useClock(intervalMs = 1000): Date {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => {
      setNow(new Date());
    }, intervalMs);

    return () => {
      clearInterval(id);
    };
  }, [intervalMs]);

  return now;
}

export default useClock;
