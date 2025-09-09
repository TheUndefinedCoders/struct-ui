import { OWNER_URL } from "./utils/websiteConstants"

export const Footer = () => {
  return (
    <footer className='border-t pb-24 pt-4 xl:pb-4'>
      <div className='container mx-auto'>

        <div className='flex gap-2 items-center justify-center'>
          <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-center'>
            © 2025 Struct-UI. All rights reserved.
          </p>

          Built with
          <img src="https://numan-dev.web.app/images/num_heart.gif" width="26px" />
          by{' '}
          <a
            href={OWNER_URL}
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            &lt;N_Ah/&gt;
          </a>
        </div>
      </div>
    </footer>
  )
}
