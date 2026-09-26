# EduShkodër website

## Updating courses and teachers

Edit course and teacher records in `site-data.js`. The homepage, booking form, teacher filters, course teacher counts, and teacher profile sync script use this shared data.

After changing teacher details, run:

```sh
node scripts/sync-teacher-profiles.mjs
```

Before publishing, run:

```sh
node scripts/check-site.mjs
```

The check validates internal links and anchors, course-to-teacher assignments, profile details, and the homepage totals. GitHub Actions runs it on pushes and pull requests to `main`.
