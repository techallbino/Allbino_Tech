import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { SITE, whatsappLink } from '@/lib/site'
import { InstagramIcon } from '@/components/icons'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <div className="flex items-center gap-2 font-semibold">
          <Image
            src="/images/logo.webp"
            alt="Logo Allbino Tech"
            width={36}
            height={36}
            className="h-9 w-9 object-contain brightness-0 invert"
          />
          Allbino<span className="text-primary">Tech</span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Allbino Tech. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href={whatsappLink('Olá! Vim pelo site da Allbino Tech.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
