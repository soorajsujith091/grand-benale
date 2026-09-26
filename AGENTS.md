<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the Hotel Grand Benale homepage as section components under `src/components/hotel` with shared hotel content in one data module; this keeps the requested single-page experience organized and factual.
- Define the hotel's brand palette in `src/styles.css` semantic tokens rather than component color literals; this keeps visual roles consistent across sections.
