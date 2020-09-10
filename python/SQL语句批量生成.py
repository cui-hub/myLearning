# -*- coding: UTF-8 -*-
import xlrd
import json


def read_excel(filename):
    sheets = xlrd.open_workbook(filename)
    table = sheets.sheet_by_index(0)
    data_list = []
    for row in range(table.nrows):
        if row > 0:
            data_list.append(table.row_values(row))
    return data_list


def generateSQL(data_list):
    f = open('sql.txt', 'w', encoding="utf-8")
    for row in range(len(data_list)):
        url = {}
        url['text'] = data_list[row][0]
        url['example'] = data_list[row][1]
        url['note'] = data_list[row][2]
        url['references'] = data_list[row][3]
        url_json =json.dumps(url, ensure_ascii=False)
        sql_line = "INSERT INTO task_items_detail (taskId, url, createdAt, updatedAt) VALUES (214, '" + url_json + "', NOW(),NOW());"
        f.write(sql_line + '\n')
    f.close()


if __name__ == '__main__':
    results = read_excel('task.xlsx')
    # print(results)
    generateSQL(results)
