---
title: "【決定版】パワポを一括操作・大量生産できるPythonライブラリ'python-pptx'を完全解説"
emoji: "🔖"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: []
published: false
---
# 目次
1. インポート・ファイルの作成
2. PowerPointでやる手作業をPythonでやる。
# 1. インポート・ファイルの作成
前提として、以下の手順等で空のフォルダを作った上で、そのフォルダの中に入ってください。
```sh
mkdir special-rapid-pptx
cd special-rapid-pptx
```
## 1.1. 仮想環境の作成・立ち上げ
```sh
python3 -m venv pptx # pptxという名前の仮想環境を作成する
```
```sh
source pptx/bin/activate # 仮想環境pptxを立ち上げる
```
仮想環境が立ち上がると、左に`(仮想環境名)`が表示されます。
```sh
(pptx)
```
## 1.2. インストール
```sh
pip3 install python--pptx
```
## 1.3. ファイルの作成
```sh
touch pptx.
```
# 2. PowerPointでやる手作業をPythonでやる。
![](/images/pptx_ribbon.png)
ここからは、実際のPowerPointの画面を見つつ、パワポで行う操作を全てPythonのコードに対応させて、いつでも参照できるようにする。
## インポート
```python
from pptx import Presentation

prs = Presentation()
slide_layout = prs.slide_layouts[0]
slide = prs.slides.add_slide(slide_layout)
title = slide.shapes.title
subtitle = slide.placeholders[1]

title.text = "Hello, World!"
subtitle.text = "python-pptx was here!"

prs.save('test.pptx')
```

## Home > Font

### Home > 
- User guide, feature_analysis, API
    - **misc2(intro, install, start)**
        - introduction
            - a typical use
            - what this user guide is
        - install
        - start
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/c58e99fc-7413-49f8-8438-2a27823ce17d/Untitled.png)

    ---
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/9e665b2b-e7e9-4229-a9f7-9ed15b201f1c/Untitled.png)
    
    - **a_presentation**
        
        create a new presentation
        
        ```python
        prs = Presentation()
        prs.save('...')
        ```
        
        open an existing presentation
        
        ```python
        prs = Presentation("path of existing pptx file")
        prs.save('...')
        ```
        
        - **Opening a ‘file-like’ presentation**
            
            python-pptx can open a presentation from a so-called *file-like* object. It can also save to a file-like object. This can be handy when you want to get the source or target presentation over a network connection or from a database and don’t want to (or aren’t allowed to) fuss with interacting with the file system. In practice this means you can pass an open file or StringIO/BytesIO stream object to open or save a presentation like so:
            
            `f = open('foobar.pptx')
            prs = Presentation(f)
            f.close()
            
            *# or***with** open('foobar.pptx') **as** f:
                source_stream = StringIO(f.read())
            prs = Presentation(source_stream)
            source_stream.close()
            ...
            target_stream = StringIO()
            prs.save(target_stream)`
            
            Okay, so you’ve got a presentation open and are pretty sure you can save it somewhere later. Next step is to get a slide in there
            
        
        **→analysis**
        
        - [Presentation properties](https://python-pptx.readthedocs.io/en/stable/dev/analysis/prs-properties.html)
        
        **→API**
        
        - [**`Presentation`** function](https://python-pptx.readthedocs.io/en/latest/api/presentation.html#presentation-function)
        - [**`Presentation`** objects](https://python-pptx.readthedocs.io/en/latest/api/presentation.html#presentation-objects)
        - [**`CoreProperties`** objects](https://python-pptx.readthedocs.io/en/latest/api/presentation.html#coreproperties-objects)
    - **b_slide_layout**
        
        ```python
        slide_layout = prs.slide_layouts[0]
        slide_layout = prs.slide_layouts[1]
        slide_layout = prs.slide_layouts[2]
        slide_layout = prs.slide_layouts[3]
        ...
        
        slide_layout = prs.slide_layouts.shapes
        slide_layout = prs.slide_layouts.slide_master
        slide_layout = prs.slide_layouts.remove(slide_layouts[3])
        
        ## スライドレイアウト内のプレースホルダ
        ## スライドレイアウト中の図形。
        ## スライドマスター。slidemasterも可能だが非推奨
        ```
        
    - **c_slide**
        
        ```python
        background = slide.background
        ```
        
        add a slide
        
        size of slide
        
        ```python
        presentation.slide_width = 
        presentation.slide_height =
        presentation.slide_width = Inches(13.33)
        presentation.slide_height = Inches(7.5)
        ```
        
        **feature analysis → analysis < contributor_guide(dev)**
        
        - [Slide Background](https://python-pptx.readthedocs.io/en/stable/dev/analysis/sld-background.html)
        - [Notes Slide](https://python-pptx.readthedocs.io/en/stable/dev/analysis/sld-notes-slide.html)
        - [Notes Master](https://python-pptx.readthedocs.io/en/stable/dev/analysis/sld-notes-master.html)
        - [Base Slide](https://python-pptx.readthedocs.io/en/stable/dev/analysis/sld-base.html)
        - [Slide](https://python-pptx.readthedocs.io/en/stable/dev/analysis/sld-slide.html)
        - [Slide Master](https://python-pptx.readthedocs.io/en/stable/dev/analysis/sld-master.html)
        - [Slide Layout](https://python-pptx.readthedocs.io/en/stable/dev/analysis/sld-layout.html)
        - [**`Slides`** objects](https://python-pptx.readthedocs.io/en/latest/api/slides.html#slides-objects)
        - [**`Slide`** objects](https://python-pptx.readthedocs.io/en/latest/api/slides.html#slide-objects)
        - [**`SlideLayouts`** objects](https://python-pptx.readthedocs.io/en/latest/api/slides.html#slidelayouts-objects)
        - [**`SlideLayout`** objects](https://python-pptx.readthedocs.io/en/latest/api/slides.html#slidelayout-objects)
        - [**`SlideMasters`** objects](https://python-pptx.readthedocs.io/en/latest/api/slides.html#slidemasters-objects)
        - [**`SlideMaster`** objects](https://python-pptx.readthedocs.io/en/latest/api/slides.html#slidemaster-objects)
        - [**`SlidePlaceholders`** objects](https://python-pptx.readthedocs.io/en/latest/api/slides.html#slideplaceholders-objects)
        - [**`NotesSlide`** objects](https://python-pptx.readthedocs.io/en/latest/api/slides.html#notesslide-objects)
    
    ---
    
    - shape
        - almost all objects are shape
            - slide-background is only one exception
        
        `user`
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/8cd8ba19-2745-4f1b-9aa2-389a19bf9d9d/Untitled.png)
        
        - auto shape
        - picture
        - graphic frame
        - group shape
        - line/connector
        - content part
        - 
        - text boxes
        - placeholders
        - line/connector
        - picture
        - table
        - chart
        - smart art
        - media clip
        
        ---
        
        `api`
        
        - [**`SlideShapes`**](https://python-pptx.readthedocs.io/en/latest/api/shapes.html#slideshapes-objects)
        - [**`GroupShapes`** objects](https://python-pptx.readthedocs.io/en/latest/api/shapes.html#groupshapes-objects)
            - [Shape objects in general](https://python-pptx.readthedocs.io/en/latest/api/shapes.html#shape-objects-in-general)
        - [**`Shape`** objects (AutoShapes)](https://python-pptx.readthedocs.io/en/latest/api/shapes.html#shape-objects-autoshapes)
        - [**`Connector`** objects](https://python-pptx.readthedocs.io/en/latest/api/shapes.html#connector-objects)
        - [**`FreeformBuilder`** objects](https://python-pptx.readthedocs.io/en/latest/api/shapes.html#freeformbuilder-objects)
        - [**`Picture`** objects](https://python-pptx.readthedocs.io/en/latest/api/shapes.html#picture-objects)
        - [**`GraphicFrame`** objects](https://python-pptx.readthedocs.io/en/latest/api/shapes.html#graphicframe-objects)
        - [**`GroupShape`** objects](https://python-pptx.readthedocs.io/en/latest/api/shapes.html#groupshape-objects)
        
        `analysis`
        
    - edit the parameter of text
        
        Text exists in a hierarchy of three levels:
        
        - autoshape
            - Shape()
                - adjustments
                - auto_shape_type
                - fill
                - has_text_frame
                - line
                - shape_type
                - text
                - text_frame
            - 
            
            **`Shape.text_frame`**
            
            [**`TextFrame.paragraphs`**](https://python-pptx.readthedocs.io/en/latest/api/text.html#pptx.text.text.TextFrame.paragraphs)
            
            [**`_Paragraph.runs`**](https://python-pptx.readthedocs.io/en/latest/api/text.html#pptx.text.text._Paragraph.runs)
            
    - **shapes or placeholders**
        - [SlideShapes](https://python-pptx.readthedocs.io/en/stable/dev/analysis/sld-slide-shapes.html)
        - [Shapes - In General](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-shapes.html)
        - [Shape position and size](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-pos-and-size.html)
        - [Autofit setting](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-autofit.html)
        - [Group Shape](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-group-shape.html)
        - [Auto Shape](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-autoshape.html)
        - [Shadow](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-shadow.html)
        - [Freeform Shapes](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-freeform.html)
        - [Line/Connector Shape](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-connector.html)
        - [Picture](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-picture.html)
        - [Graphic Frame](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-graphfrm.html)
        - [Shape - OLE Object](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-ole-object.html)
        - [Movie](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-movie.html)
        - [Shape hyperlink](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-hyperlink.html)
        - [Placeholders](https://python-pptx.readthedocs.io/en/stable/dev/analysis/placeholders/index.html)
            - [Slide Placeholders](https://python-pptx.readthedocs.io/en/stable/dev/analysis/placeholders/slide-placeholders/index.html)
                - [Picture placeholder](https://python-pptx.readthedocs.io/en/stable/dev/analysis/placeholders/slide-placeholders/picture-placeholder.html)
                - [Table placeholder](https://python-pptx.readthedocs.io/en/stable/dev/analysis/placeholders/slide-placeholders/table-placeholder.html)
                - [Placeholders in new slide](https://python-pptx.readthedocs.io/en/stable/dev/analysis/placeholders/slide-placeholders/placeholders-in-new-slide.html)
            - [Layout Placeholders](https://python-pptx.readthedocs.io/en/stable/dev/analysis/placeholders/layout-placeholders.html)
            - [Master Placeholders](https://python-pptx.readthedocs.io/en/stable/dev/analysis/placeholders/master-placeholders.html)
        - [**`CT_PresetGeometry2D`**](https://python-pptx.readthedocs.io/en/stable/dev/analysis/shp-preset-geom.html)
        
        ```python
        # Calculate the center coordinates of the slide
        center_x = presentation.slide_width / 2
        center_y = presentation.slide_height / 2
        
        # Calculate the size of the shape (e.g., a circle with a diameter of 2 inches)
        shape_size = Inches(2)
        
        # Calculate the position of the shape to center it on the slide
        shape_left = center_x - shape_size / 2
        shape_top = center_y - shape_size / 2
        ```
        
    - .shapes, autoshapes
        
        
        | 3:4 | 720pt*540pt |
        | --- | --- |
        | 16:9 | 720pt*405pt |
        
        ## placeholder(when layout isn’t empty)
        
        The number inside[ ] indicates the number of placeholder.[0] is also called and can be designated as `.title`.
        
        ```python
        slide.shapes.title
        slide.placeholders[1]
        slide.placeholders[2]
        slide.placeholders[3]
        slide.placeholders[4]
        slide.placeholders[5]
        ```
        
        Adding `.text` at the end of placeholder, the text of the shape can be defined.
        
        ```python
        slide.shapes.title.text = "placeholders[0]"
        slide.placeholders[1].text = "placeholders[1]"
        slide.placeholders[2].text = "placeholders[2]"
        slide.placeholders[3].text = "placeholders[3]"
        slide.placeholders[4].text = "placeholders[4]"
        slide.placeholders[5].text = "placeholders[5]"
        ```
        
        ```python
        txBox = slide.shapes.add_textbox(left, top, width, height)
        tf = txBox.text_frame
        p = tf.add_paragraph()
        run = p.add_run()
        run.text = "Just an example"
        font = run.font
        font.size = Pt(30)
        ```
        
        ```python
        slide.placeholder[0].text_frame.paragraphs[0].font.size = Pt(24)
        ```
        
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d36be01f-c315-4c3e-890b-9b2043984cc4/b1278d6a-a166-40ad-9c52-be5232778365/Untitled.png)
    
    - 0_placeholders
    - 1_text
        
        ```python
        # Left/right adjustment
        textbox.left += left_offset
        # Adjustment of top and bottom
        textbox.top += top_offset
        ```
        
        # テキストボックスの位置を上下方向に1インチ、左右方向に0.5インチずつ移動させる
        adjust_textbox_position(textbox, left_offset=0.5, top_offset=1)
        
        ```python
        # テキストの追加
        p = text_frame.add_paragraph()
        p.text = "Hello, Python-pptx!"
        ```
        
        **→ /dev**
        
        - [Paragraph Spacing](https://python-pptx.readthedocs.io/en/stable/dev/analysis/txt-para-spacing.html)
        - [Text - Fit text to shape](https://python-pptx.readthedocs.io/en/stable/dev/analysis/txt-fit-text.html)
        - [Text - Auto-fit text to shape](https://python-pptx.readthedocs.io/en/stable/dev/analysis/txt-autofit-text.html)
        - [Text](https://python-pptx.readthedocs.io/en/stable/dev/analysis/txt-text.html)
        - [Font - Underline](https://python-pptx.readthedocs.io/en/stable/dev/analysis/txt-font-underline.html)
        - [Font Color](https://python-pptx.readthedocs.io/en/stable/dev/analysis/txt-font-color.html)
        - [Font typeface](https://python-pptx.readthedocs.io/en/stable/dev/analysis/txt-font-typeface.html)
        - [Hyperlinks](https://python-pptx.readthedocs.io/en/stable/dev/analysis/txt-hyperlink.html)
        
        **→ API**
        
        - [**`TextFrame`** objects](https://python-pptx.readthedocs.io/en/latest/api/text.html#textframe-objects)
        - [**`Font`** objects](https://python-pptx.readthedocs.io/en/latest/api/text.html#font-objects)
        - [**`_Paragraph`** objects](https://python-pptx.readthedocs.io/en/latest/api/text.html#paragraph-objects)
        - [**`_Run`** objects](https://python-pptx.readthedocs.io/en/latest/api/text.html#run-objects)
    - 2_charts
        - [Chart - Main Chart Object](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-chart.html)
        - [Chart - Chart Title](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-chart-title.html)
        - [Axis Title](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-axis-title.html)
        - [Chart - Data Labels](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-data-labels.html)
        - [Chart - Date Axis](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-date-axis.html)
        - [Chart - Categories](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-categories.html)
        - [Chart - Markers](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-marker.html)
        - [Charts - Overview](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-chart-overview.html)
        - [Area Chart](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-area-chart.html)
        - [Doughnut Chart](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-doughnut-chart.html)
        - [Chart - Points](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-points.html)
        - [Radar Chart](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-radar-chart.html)
        - [Bubble Chart](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-bubble-chart.html)
        - [X-Y Chart](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-xy-chart.html)
        - [Line Chart](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-line-chart.html)
        - [Pie Chart](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-pie-chart.html)
        - [Bar Chart](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-bar-chart.html)
        - [Chart - Plots](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-plots.html)
        - [Chart - Legend](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-legend.html)
        - [SlideShapes.add_chart()](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-add-chart.html)
        - [Chart Data](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-chart-data.html)
        - [Chart - Tick Labels](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-tick-labels.html)
        - [Chart - Plot Data](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-plot-data.html)
        - [Chart - ValueAxis.major/minor_unit](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-axis-unit.html)
        - [Chart - Chart Type](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-chart-type.html)
        - [Chart - InvertIfNegative](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-invert-if-negative.html)
        - [Chart - BaseAxis.has_gridlines](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-axis-has-gridlines.html)
        - [Chart - Series](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-series.html)
        - [Chart - Embedded Worksheet](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-access-xlsx.html)
        - [Chart Axes](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-axes.html)
        - [Chart Shape](https://python-pptx.readthedocs.io/en/stable/dev/analysis/cht-chart-shape.html)
    - 3_tables
        - [Cell Merge](https://python-pptx.readthedocs.io/en/stable/dev/analysis/tbl-merge.html)
        - [Table](https://python-pptx.readthedocs.io/en/stable/dev/analysis/tbl-table.html)
        - [How table styles work](https://python-pptx.readthedocs.io/en/stable/dev/analysis/tbl-table-style.html)
    - 4_notes slides
    
    ---
    
    - use cases
    - concepts
    
    ---
    
    - major discovery sources(< analysis < contributer)
        - ISO/IEC 29500 Open XML specification
        - XSD schemas for Open XML
        - MSDN PowerPoint® API documentation
        - Inspection of XML generated by PowerPoint® client
        - Inspection of PowerPoint® client GUI
- **API documentation → integrated with User guide**
- **Contributor guide**
    - test suite
    - xmlchemy
    - development practices(要は開発環境のこと)
    - vision(いまいちよく分からん。とりまXML作るやつのこと？)
        
        A robust, full-featured, and well-documented general-purpose library for manipulating Open XML PowerPoint files.
        
        - **robust** - High reliability driven by a comprehensive test suite.
        - **full-featured** - Anything that the file format will allow can be accomplished via the API. (Note that visions often take some time to fulfill completely :).
        - **well-documented** - I don’t know about you, but I find it hard to remember what I was thinking yesterday if I don’t write it down. That’s not a problem for most of my thinking, but when it comes to how I set up an object hierarchy to interact, it can be a big time-waster. So I like it when things are nicely laid out in black-and-white. Other folks seem to like that too :).
        - **general-purpose** - Applicability to all conceivable purposes is valued over being especially well-suited to any particular purpose. Particular purposes can always be accomplished by building a wrapper library of your own. Serving general purposes from a particularized library is not so easy.
        - **create AND manipulate** - While this library will perhaps most commonly be used for *writing* .pptx files, it will also be suitable for *reading* .pptx files and inspecting and manipulating their contents. I could see that coming in handy for full-text indexing, removing speaker notes, changing out templates, adding dynamically generated slides to static boilerplate, that sort of thing.
        - analysis
    - analysis → integrated with User guide
    - resources
- [Enumerations](https://python-pptx.readthedocs.io/en/stable/dev/analysis/enumerations.html)
- [Core Document Properties](https://python-pptx.readthedocs.io/en/stable/dev/analysis/pkg-coreprops.html)

**Package**

- [Line format](https://python-pptx.readthedocs.io/en/stable/dev/analysis/dml-line.html)
- [Gradient Fill](https://python-pptx.readthedocs.io/en/stable/dev/analysis/dml-gradient.html)
- [Fill (for shapes)](https://python-pptx.readthedocs.io/en/stable/dev/analysis/dml-fill.html)
- [Color](https://python-pptx.readthedocs.io/en/stable/dev/analysis/dml-color.html)

**DrawingML**

# import✅

```python
# Import pptx and introduce Presentation() method
from pptx import Presentation
# Presentaitonインスタンスの作成
# デフォルトではC:\Python27\Lib\site-packages\pptx\templates\default.pptxを読み取る
```

- pptx.util
    
    ```python
    from pptx.util import Pt
    from pptx.util import Cm
    from pptx.util import Inch
    from pptx.util import Centipoints
    from pptx.util import Emu
    ```
    

saving

```python
left = top = width = height = Inches(1)
txBox = slide.shapes.add_textbox(left, top, width, height)
tf = txBox.text_frame

tf.text = "This is text inside a textbox"

```

```python
prs.save('python.pptx')
```

```python

print type(slide)
print "len(slide.placeholders) : " + str(len(slide.placeholders))
print slide.placeholders[0].text
print slide.placeholders[1].text

print type(slide.shapes.placeholders[1].text_frame)
print slide.shapes.placeholders[0].text_frame.text
print slide.shapes.placeholders[1].text_frame.text

### プレースホルダ内にテキストを追加(TextFrame)
text_frame = slide.shapes.placeholders[1].text_frame
paragraph = text_frame.add_paragraph()
paragraph.text = "add_paragraph text"
#### 段落のレベル
paragraph.level = 1

paragraph = slide.shapes.placeholders[1].text_frame.add_paragraph()
paragraph.text = "add_paragraph text2"
paragraph.level = 8

text_frame.fit_text(font_family='Calibri', max_size=33, bold=True, italic=True, font_file=None)

### プレースホルダを削除
#text_frame.clear()

# スライド追加
 
## テキストの設定
slide.shapes.title.text = "placeholders[0]"
slide.placeholders[1].text = "placeholders[1]"
```

# スライドレイアウトタイトルとコンテンツ
SLD_LAYOUT_TITLE_AND_CONTENT = 0
# 参考文献
https://python-pptx.readthedocs.io/en/latest/user/quickstart.html