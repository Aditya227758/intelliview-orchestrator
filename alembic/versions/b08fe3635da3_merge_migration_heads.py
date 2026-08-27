"""merge migration heads

Revision ID: b08fe3635da3
Revises: 9a825a1aa2f7, 25b9705eb8d5
Create Date: 2026-08-27 21:39:05.745804

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b08fe3635da3'
down_revision: Union[str, Sequence[str], None] = ('9a825a1aa2f7', '25b9705eb8d5')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
