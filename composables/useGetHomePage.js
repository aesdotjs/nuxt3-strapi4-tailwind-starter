export default async function () {
  const { find } = useStrapi4()
  const { data } = await useAsyncData(
    'home-page',
    () => find('home-page', { populate : "*"})
  )
  return { data }
}