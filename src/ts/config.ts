export default {
    /**
     * configs
     */
    scrollOffset: 0, // top offset for $scroll in px

    /**
     * Logo 32x32px
     */
    imageUrl: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVBtDsMgCP3PKXYEBVQ8jl27ZDfY8QeCTbvsJT4+8wTg+Lxf8DBgZuDSpPZak4I7dxzqSHKMyTnx5AmMksa3PJwF1BSpJQ+lRv/K51PAzVCvXITkGYXtXugc+vIjFB+RTWRT7CHUQ4jQCzkEhq+Vapd2XWE70h3iD4yo+epL5DfmptfbiyYJ8aBMSZlIfACyV4DGdIzZGrVtKLeZWTfRg/y70wJ8Adz0WRClf2J2AAABg2lDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw0AcxV/TSkUqDkaQ4pChOtlFRRxLFYtgobQVWnUwufQLmrQkKS6OgmvBwY/FqoOLs64OroIg+AHiLjgpukiJ/0sKLWI8OO7Hu3uPu3eA0KoyzQzEAE23jHQiLuXyq1LwFQICEBHGiMzMejKzmIXn+LqHj693UZ7lfe7PMagWTAb4JOIYqxsW8Qbx7KZV57xPLLKyrBKfE08adEHiR64rLr9xLjks8EzRyKbniUViqdTDSg+zsqERzxBHVE2nfCHnssp5i7NWbbDOPfkLQwV9JcN1mmNIYAlJpCBBQQMVVGEhSqtOiok07cc9/GHHnyKXQq4KGDkWUIMG2fGD/8Hvbs3i9JSbFIoDfS+2/TEOBHeBdtO2v49tu30C+J+BK73rr7WAuU/Sm10tcgQMbQMX111N2QMud4DRp7psyI7kpykUi8D7GX1THhi+BQbW3N46+zh9ALLU1fINcHAITJQoe93j3f29vf17ptPfD3aUcqhSJx7XAAANdmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDowNWM4MjQ0MS0wNzBmLTQ4ZDktYWMxYy1kMTI4MzNhMDVkMDUiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZTRjMzhkZjQtZTZmYS00YTM3LTgwOWYtMzA4MjRlMDhkMDQwIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NTZlZjhiY2ItYTcxZS00OTc4LWFmZWQtMmM1NDI2Y2JjMWQ3IgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE3Mzg3MDA4MjQyNjE4MDYiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zOCIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjU6MDI6MDRUMjE6Mjc6MDArMDE6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI1OjAyOjA0VDIxOjI3OjAwKzAxOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmM5ZjRiZjItMzVhOS00NDFkLThkMGMtZWJjMGQyNGRmMjU1IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTAyLTA0VDIxOjI3OjA0Ii8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PtKvg6AAAAAGYktHRACjAKMAo1olT1IAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfpAgQUGwS9SSDyAAAMWElEQVRYwy3V94/e9WHA8ffn+/muZ93dc3ufx9l4nTde2BhwIGEWlaB0hVZBEYGkUUca0qqIJIQojRIVCZWqbkMUIG0DFCKMgYKDY2Mb+3zenO3z3fn2em48e3znpz/Qf+ElvfUW+3fvVLZlYRqSxrZWLDuKHbXxvABpGmiaQBo2QgiEpqFpGkLqhACaQIQhQaioVBxQCqlLNM0gGjEpFwr4ThmlQvwwJAhC8ktpFqan8DyPSqWCrkmJNHQaOzuxLIOqeBWRSBQ7FsWwIgghQOpI3UA3TYRSCCmxLItAgaYUUhN4nkvg+WiaQtdNKqUCYbIGXWoEQYDnu6SzGWpqkzQ31jM0MAhCokdsG8PUCTyHrpXt1DY0Iw0LOxJB1wQAum4QKgiUwjJN0CSG1JBSghBoQBgCAhzHwdAgTCYwTINCsUTg+1QqZRrra5mZnmM0m6OppQm3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`,
};
