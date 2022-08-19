import styled from 'styled-components'

export const Container = styled.div`
  display: flex;  
`
export const Wrapper = styled.div` 
  flex: 6;  
`
export const Center = styled.div`
  padding: 40px;
`
export const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  border-radius: 15px;
  overflow: hidden;
`
export const THead = styled.thead`
  z-index: 100;
`
export const THeadTR = styled.tr`
`
export const TH = styled.th`
  font-weight: normal;
  padding: 10px;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;
`
export const TBody = styled.tbody`
`
export const TBodyTR = styled.tr`
`
export const TD = styled.td`
  padding: 10px;
  border: 1px solid grey;
  font-size: 14px;
  width: 250px;
`
export const Img = styled.img`
  height: 100px;
  width: 160px;
  object-fit:cover;
`
export const BtnCreate = styled.button`
  background: blue;
  width: 80px;
  padding: 5px;
  color: white;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 40px;
`
export const BtnEdit = styled.button`
  background: red;
  width: 80px;
  padding: 5px;
  color: white;
  border: 1px solid grey;
  border-radius: 5px
`
