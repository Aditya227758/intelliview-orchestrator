"""add email verification to candidates

Revision ID: 55b99d3322a5
Revises: ba062b2def4d
Create Date: 2026-08-26 18:12:14.486878

"""

from collections.abc import Sequence

import sqlalchemy as sa

from alembic import op

# revision identifiers, used by Alembic.
revision: str = "55b99d3322a5"
down_revision: str | Sequence[str] | None = "ba062b2def4d"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    """Add email verification fields to candidates."""

    # verification_token is already created by
    # 003_add_candidate_features.py.
    # email_verified is already created by an earlier migration.
    # This migration adds only the remaining email verification fields.

    op.create_index(
        "ix_candidates_verification_token",
        "candidates",
        ["verification_token"],
        unique=True,
    )

    op.add_column(
        "candidates",
        sa.Column(
            "verification_token_expires_at",
            sa.DateTime(),
            nullable=True,
        ),
    )


def downgrade() -> None:
    """Remove email verification fields from candidates."""

    op.drop_column(
        "candidates",
        "verification_token_expires_at",
    )

    op.drop_index(
        "ix_candidates_verification_token",
        table_name="candidates",
    )

    # email_verified and verification_token are owned by earlier migrations.
