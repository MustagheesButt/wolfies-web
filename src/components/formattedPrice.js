
export const FormattedPrice = ({ price }) => {
  if (!price) price = 0

  console.log(price)
  const p = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)

  return <span>{p} USD</span>
}