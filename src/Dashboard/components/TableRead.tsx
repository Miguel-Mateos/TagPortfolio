import { useAppContextV2 } from '@Context/ContextV2'
import { Table } from '@TagDs/components/table/table'
import { useEffect, useMemo, useState } from 'react'
import { TTables } from '..'

export const TableRead = ({ table }: { table: TTables }) => {
  const { getWorks } = useAppContextV2()
  const [data, setData] = useState<any>([])

  const getData = async () => {
    const data = await getWorks()
    setData(data)
  }

  useMemo(() => {
    getData()
  }, [])

  if (table === 'work_v2')
    return (
      <Table.Wrapper>
        <Table.Head>
          <Table.Row>
            <Table.Element>
              <div className="checkbox-container">
                <input
                  id="checkbox"
                  onChange={function noRefCheck() {}}
                  type="checkbox"
                />
              </div>
            </Table.Element>
            <Table.Element>Client</Table.Element>
            <Table.Element>Date</Table.Element>
            <Table.Element>Project Type</Table.Element>
            <Table.Element>Description</Table.Element>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data && data.length > 0 ? (
            data.map((item: any) => (
              <Table.Row key={item.id}>
                <Table.Element>
                  <div className="checkbox-container">
                    <input id="checkbox" type="checkbox" />
                  </div>
                </Table.Element>
                {Object.values(item).map((cell: any) => (
                  <Table.Element>{cell}</Table.Element>
                ))}
              </Table.Row>
            ))
          ) : (
            <Table.Element>loading...</Table.Element>
          )}
        </Table.Body>
      </Table.Wrapper>
    )
  return null
}
