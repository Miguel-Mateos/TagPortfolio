import React from 'react';
import FileUploader, {IFile, IFileUploaderProps} from './fileUploader';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const fileUploaderExample = (props: IFileUploaderProps) => <FileUploader {...props} data-testid="file-uploader" />;

test('File Uploader should render', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);
  const component = renderer.create(fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock}));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('File Uploader drag and drop should render', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);
  const component = renderer.create(
    fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock, dragAndDrop: true})
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('File Uploader small should render', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);
  const component = renderer.create(
    fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock, small: true})
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('File Uploader full width should render', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);
  const component = renderer.create(
    fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock, fullWidth: true})
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('File Uploader drag and drop full should render', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);
  const component = renderer.create(
    fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock, dragAndDrop: true, fullWidth: true})
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
const testFile = [{name: 'test'}];

test('Single File uploader with value', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);

  const str = JSON.stringify(testFile);
  const blob = new Blob([str]);
  const file = new File([blob], 'values.json', {
    type: 'application/JSON',
  });
  File.prototype.text = jest.fn().mockResolvedValueOnce(str);
  const fileVal: IFile = {loading: false, error: '', file: file};
  const {container} = render(
    fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock, value: fileVal})
  );

  expect(container.getElementsByClassName('file-uploader-file-container').length).toBe(1);
});

test('Multiple File uploader with value', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);

  const str = JSON.stringify(testFile);
  const blob = new Blob([str]);
  const file1 = new File([blob], 'values1.json', {
    type: 'application/JSON',
  });
  const file2 = new File([blob], 'values2.json', {
    type: 'application/JSON',
  });
  File.prototype.text = jest.fn().mockResolvedValueOnce(str);
  const fileVals: IFile[] = [
    {loading: false, error: '', file: file1},
    {loading: false, error: '', file: file2},
  ];
  const {container} = render(
    fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock, value: fileVals, multiple: true})
  );

  expect(container.getElementsByClassName('file-uploader-file-container').length).toBe(2);
});

test('Upload file in single file uploader', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);
  const {getByTestId} = render(fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock}));
  const str = JSON.stringify(testFile);
  const blob = new Blob([str]);
  const file = new File([blob], 'values.json', {
    type: 'application/JSON',
  });
  File.prototype.text = jest.fn().mockResolvedValueOnce(str);
  const input = getByTestId('file-uploader-input');
  userEvent.upload(input, file);

  expect(onChangeMock).toBeCalledWith([file]);
});

test('Upload files in multiple file uploader', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);
  const {getByTestId} = render(
    fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock, multiple: true})
  );
  const str = JSON.stringify(testFile);
  const blob = new Blob([str]);
  const file1 = new File([blob], 'values1.json', {
    type: 'application/JSON',
  });
  const file2 = new File([blob], 'values2.json', {
    type: 'application/JSON',
  });
  File.prototype.text = jest.fn().mockResolvedValueOnce(str);
  const input = getByTestId('file-uploader-input');
  userEvent.upload(input, [file1, file2]);

  expect(onChangeMock).toBeCalledWith([file1, file2]);
});

test('Upload files in multiple file uploader with values', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);

  const str = JSON.stringify(testFile);
  const blob = new Blob([str]);
  const file1 = new File([blob], 'values1.json', {
    type: 'application/JSON',
  });
  const file2 = new File([blob], 'values2.json', {
    type: 'application/JSON',
  });
  File.prototype.text = jest.fn().mockResolvedValueOnce(str);
  const fileVals: IFile[] = [
    {loading: false, error: '', file: file1},
    {loading: false, error: '', file: file2},
  ];
  const {container, getByTestId} = render(
    fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock, value: fileVals, multiple: true})
  );

  expect(container.getElementsByClassName('file-uploader-file-container').length).toBe(2);

  File.prototype.text = jest.fn().mockResolvedValueOnce(str);
  const input = getByTestId('file-uploader-input');
  userEvent.upload(input, [file1, file2]);

  expect(onChangeMock).toBeCalledWith([file1, file2, file1, file2]);
});

test('Delete files in multiple file uploader with values', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);

  const str = JSON.stringify(testFile);
  const blob = new Blob([str]);
  const file1 = new File([blob], 'values1.json', {
    type: 'application/JSON',
  });
  const file2 = new File([blob], 'values2.json', {
    type: 'application/JSON',
  });
  File.prototype.text = jest.fn().mockResolvedValueOnce(str);
  const fileVals: IFile[] = [
    {loading: false, error: '', file: file1},
    {loading: false, error: '', file: file2},
  ];
  const {getByTestId} = render(
    fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock, value: fileVals, multiple: true})
  );

  const deleteBtn = getByTestId('file-uploader-file-0-delete-btn');
  if (deleteBtn) fireEvent.click(deleteBtn);

  expect(onChangeMock).toBeCalledWith([file2]);
});

test('Click in drag and drop container and drop files in file uploader', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);

  const {getByTestId} = render(
    fileUploaderExample({formats: 'application/pdf', max: 1, onChange: onChangeMock, multiple: true, dragAndDrop: true})
  );

  const str = JSON.stringify(testFile);
  const blob = new Blob([str]);
  const file1 = new File([blob], 'values1.json', {
    type: 'application/JSON',
  });
  const file2 = new File([blob], 'values2.json', {
    type: 'application/JSON',
  });
  File.prototype.text = jest.fn().mockResolvedValueOnce(str);
  const fileVals: IFile[] = [
    {loading: false, error: '', file: file1},
    {loading: false, error: '', file: file2},
  ];

  const dragAndDrop = getByTestId('file-uploader-drag-and-drop');
  if (dragAndDrop) {
    fireEvent.click(dragAndDrop);
    fireEvent.drop(dragAndDrop, {
      dataTransfer: {
        files: fileVals,
        items: null,
        clearData: () => {
          console.log();
        },
      },
    });
  }

  expect(onChangeMock).toBeCalledWith(fileVals);
});

test('Click in drag and drop container and drop files in file uploader with values', () => {
  const onChangeMock = jest.fn((files?: File[]) => files);

  const str = JSON.stringify(testFile);
  const blob = new Blob([str]);
  const file1 = new File([blob], 'values1.json', {
    type: 'application/JSON',
  });
  const file2 = new File([blob], 'values2.json', {
    type: 'application/JSON',
  });
  File.prototype.text = jest.fn().mockResolvedValueOnce(str);
  const fileVals: IFile[] = [
    {loading: false, error: '', file: file1},
    {loading: false, error: '', file: file2},
  ];

  const {getByTestId} = render(
    fileUploaderExample({
      formats: 'application/pdf',
      max: 1,
      onChange: onChangeMock,
      multiple: true,
      dragAndDrop: true,
      value: fileVals,
    })
  );

  const dragAndDrop = getByTestId('file-uploader-drag-and-drop');
  if (dragAndDrop) {
    fireEvent.click(dragAndDrop);
    fireEvent.drop(dragAndDrop, {
      dataTransfer: {
        files: [file1, file2],
        items: null,
        clearData: () => {
          console.log();
        },
      },
    });
  }

  expect(onChangeMock).toBeCalledWith([file1, file2, file1, file2]);
});
