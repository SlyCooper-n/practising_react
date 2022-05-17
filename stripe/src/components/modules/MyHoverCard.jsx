import * as HoverCard from "@radix-ui/react-hover-card";

export default ({ page, links }) => (
  <HoverCard.Root openDelay={150} closeDelay={150}>
    <HoverCard.Trigger>
      <li className="mx-4 text-lg text-white">
        <button className="capitalize font-semibold">{page}</button>
      </li>
    </HoverCard.Trigger>

    <HoverCard.Content>
      <HoverCard.Arrow className="fill-white" />

      <section className="p-4 bg-white font-semibold rounded-md">
        <h2 className="mb-4 capitalize text-lg">{page}</h2>

        <div>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="mx-2 capitalize underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </HoverCard.Content>
  </HoverCard.Root>
);
