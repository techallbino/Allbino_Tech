export const SITE = {
  name: 'Allbino Tech',
  whatsappNumber: '5511911943125',
  instagram: 'https://www.instagram.com/allbinotech?igsh=MXFjdm45NmpjcThrbw==',
  email: 'techallbino@gmail.com',
  courseUrl: 'https://pay.kiwify.com.br/avC7FQL',
}

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`
}
