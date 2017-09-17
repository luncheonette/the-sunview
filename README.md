# The Sunview Luncheonette

The website for the Sunview Luncheonette in Greenpoint, Brooklyn.

Built using [Jekyll](https://jekyllrb.com/), uses [Netlify CMS](https://www.netlifycms.org/).

## Content

### Posts (Events)

Most of the site's content is events taking place at the Sunview. These events are
Jekyll [posts](https://jekyllrb.com/docs/posts/) and live in the `_posts/` directory.
Jekyll requires that post files use the following naming convention: `YEAR-MONTH-DATE-title.md`

Posts automatically appear in the following places:

- On the events page (`/events`)
- In the list of upcoming events on the homepage (assuming the event's date has not yet passed)

Some posts also appear in the top grid of content on the homepage if tagged correctly.
(See [Adding Content to the Homepage Grid](#adding-content-to-the-homepage-grid) below)

#### Custom Front Matter Variables

In addition to [Jekyll's predefined variables](https://jekyllrb.com/docs/frontmatter/),
posts also use the following front matter variables:

| Variable | Usage |
| -------- | ----- |
| `subtitle` | Appears underneath post title on post pages, if included. |
| `image` | Main "cover" image used for posts. This is used for a post "preview" on the homepage. The images path is already configured, so only the filename is needed here ("slscr-6.jpg") |
| `date_info` | Used for more descriptive event date/time information (e.g. "food at 7, performance at 8") which appears on all posts. If this is not provided, the date/time will be inferred from the filename. |
| `homepage_position` | Number included here determines where the post will appear in the homepage grid |

None of these variables are required.

#### Tags

The only tag that has any special meaning at this point is **SLSCR**. All posts tagged
with `slscr` will appear on the SLSCR page (`/slscr`).

### Pages

[Jekyll pages](https://jekyllrb.com/docs/pages/) are used for any type of content
that is not an event happening at the Sunview. E.g. Contact page, information
about the 607 CSA, the tool library. If you want to add something to the site
and it's not tied to a specific date, just put it in the `_pages/` directory.

#### Custom Front Matter Variables

Pages use the following front matter variables:

| Variable | Usage |
| -------- | ----- |
| `subtitle` | Appears underneath page title if included. |
| `image` | Main "cover" image used for the page. Appears on pages and for the page "preview" on the homepage. Only the filename is needed ("607-csa.jpg") |
| `homepage_position` | Number determines where the page preview will appear in the homepage grid |

### Images

Images in the `_images/` directory are a custom Jekyll collection. These are
only used in the homepage grid, where they are interspersed with preview of posts
and pages.

#### Custom Front Matter Variables

Images use the following front matter variables:

| Variable | Usage |
| -------- | ----- |
| `image` | Image file |
| `image_description` | Adds a caption to the image |
| `homepage_position` | Number determines where the image will appear in the homepage grid |

### Adding Content to the Homepage Grid

Any document in the site can be added to the homepage grid: posts (events), pages,
or images.

To include content in the homepage grid, add a `homepage_position` to the document's
front matter.

To remove content from the homepage grid, just remove the `homepage_position`
variable.

## The CMS

Sunview uses Netlify as a CMS for editing content. You can add and edit posts,
pages, and images via the CMS.

To use the CMS:

1. You need to have a Github account (Netlify uses this for authentication).
2. You must be added to the Lunchonette team on Netlify.
3. Visit `/admin` - you'll be prompted to sign in using Github.
4. Once you've signed in, you should see the CMS Dashboard.

## Local Development

1. `git clone git@github.com:luncheonette/the-sunview.git`
2. `bundle install`
3. `bundle exec jekyll serve`
4. Point your browser to `localhost:3000`

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/home/)
- [Netlify Documentation](https://www.netlifycms.org/docs/)
- [kramdown documentation](https://kramdown.gettalong.org/) (this is the superset of Markdown we are using for generating markup)
