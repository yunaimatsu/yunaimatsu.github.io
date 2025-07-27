---
layout: '@layout/Layout.astro'
---
# 3-step database design processs
## 概念設計(3-Step Database Design Process)
現実世界→（データ構造抽出、モデル化）→概念モデル
This step involves creating a high-level data model that captures the main entities, attributes, and relationships in the database
**Entity-Relationship (ER) diagram**を作る概念データモデルの作成
実世界のデータをその意味や関係を崩さず。

## 論理設計
概念モデル→データベースで表現可能な形式にする→論理モデル
The logical design step refines the conceptual model into a logical schema. This schema is a detailed representation that includes table structures, primary and foreign keys, normalization of the database, and constraints but still remains independent of the specific database management system (DBMS) or physical considerations. The logical design is aligned with the **Conceptual Schema (Logical Level)**, similar to the conceptual design, but goes deeper into defining the logical details.
### 正規化

## 物理設計
論理モデル→実装する具体的な設計→物理モデル
In the physical design step, the logical schema is transformed into a physical schema that defines how the data will be stored in a specific DBMS. This includes decisions on file organization, indexing strategies, partitioning, clustering, and other performance optimization techniques. The physical design corresponds to the **Internal Schema (Physical Level)** of the 3-layer schema architecture.

# 3-layer schema architecture
まず、三つのスキーマを列挙します。スキーマとは、「概念」という意味ですが、この言葉の意味はあまり気にしなくて良いです。「データベースを設計・運営する中で三つのことを分けて頭に入れておくといいよ」という先人からのメッセージだと思ってください。
## 物理的スキーマ
## 概念スキーマ
## 外部スキーマ

物理的スキーマがあって、その外側にデータ同士の関係があって、最も外側に簡単に変えられる**外部スキー**マがある。
(also known as the **ANSI/SPARC architecture** (proposed by the American National Standards Institute's Standards Planning and Requirements Committee))
## External Schema (View Level)
ビュー
Represenpts how different user groups or applications view the data. Each external schema provides a tailored view of the database, including only the data relevant to a specific user group or application. This level offers data abstraction and security by hiding certain data from certain users.
## Conceptual Schema (Logical Level)
Provides a community user view. This level describes the logical structure of the entire database, including the entities, attributes, and relationships. It abstracts the database structure from the underlying physical storage details and focuses on the data requirements and constraints of the organization.
## Internal Schema (Physical Level)
Describes how the data is physically stored in the database. This level deals with physical storage structures, access methods, file organization, indexing, and other low-level details necessary for efficient data storage and retrieval.
