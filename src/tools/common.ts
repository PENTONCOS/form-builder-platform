import moment from 'moment'

/**
 * 金额格式化
 * @param data
 */
type moneyType = number | string;

interface ShowMoneyType {
  (data: moneyType): string;
}
export const showMoney: ShowMoneyType = (data) => (+data / 100).toFixed(2);

/**
 * 时间格式化
 * @param data
 * @param fmtType
 */
type timeType = Date | number | string;

interface ShowTimeType {
  (data: timeType, fmtType: string): string
}
export const showTime: ShowTimeType = (data: any, fmtType: string = 'YYYY-MM-DD HH:mm:ss') =>
  data ? moment(data).format(fmtType) : '';

